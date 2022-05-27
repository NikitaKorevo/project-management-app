import { FC, useState } from 'react';
import { Box, IconButton, Stack, TextField, Typography } from '@mui/material';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { ITask } from '../../../types/ITask';
import { taskAPI } from '../../../services/taskAPI';
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal';

interface IBoardTaskProps {
  taskData: ITask;
}

const BoardTask: FC<IBoardTaskProps> = ({
  taskData: { boardId, columnId, id, userId, title, order, description },
}) => {
  const [deleteTask] = taskAPI.useDeleteTaskMutation();
  const [updateTask] = taskAPI.useUpdateTaskMutation();

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const [isTaskEditMode, setIsTaskEditMode] = useState(false);
  const [textFieldTitleValue, setTextFieldTitleValue] = useState(title);
  const [textFieldDescriptionValue, setTextFieldDescriptionValue] = useState(description);

  const handleClickEditIcon = (): void => {
    setIsTaskEditMode(true);
  };

  const handleChangeTextFieldTitle = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTextFieldTitleValue(e.target.value);
  };

  const handleChangeTextFieldDescription = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTextFieldDescriptionValue(e.target.value);
  };

  const approveTaskChange = (): void => {
    updateTask({
      boardId,
      columnId,
      userId,
      taskId: id,
      title: textFieldTitleValue,
      order,
      description: textFieldDescriptionValue,
    });
    setIsTaskEditMode(false);
  };

  const cancelTaskChange = (): void => {
    setIsTaskEditMode(false);
    setTextFieldTitleValue(title);
    setTextFieldDescriptionValue(description);
  };

  const handleClickDeleteIcon = (): void => {
    setIsConfirmationModalOpen(true);
  };

  const deleteSelectedTask = (): void => {
    deleteTask({ boardId, columnId, taskId: id });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 0.2,
        m: 1,
        p: 1,
        order,
        border: '1px solid rgba(25, 118, 210, 0.5)',
        borderRadius: 1,
      }}
    >
      {isTaskEditMode ? (
        <>
          <TextField
            size="small"
            value={textFieldTitleValue}
            fullWidth
            onChange={handleChangeTextFieldTitle}
          />

          <TextField
            multiline
            value={textFieldDescriptionValue}
            fullWidth
            onChange={handleChangeTextFieldDescription}
          />
        </>
      ) : (
        <>
          <Typography variant="body1" component="h3">
            {title}
          </Typography>

          <Typography variant="body2">{description}</Typography>
        </>
      )}

      <Stack direction="row" justifyContent="flex-end" spacing={1}>
        {isTaskEditMode ? (
          <>
            <IconButton size="small" onClick={approveTaskChange}>
              <DoneOutlinedIcon />
            </IconButton>

            <IconButton size="small" onClick={cancelTaskChange}>
              <ClearOutlinedIcon />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton size="small" onClick={handleClickEditIcon}>
              <EditOutlinedIcon />
            </IconButton>

            <IconButton size="small" onClick={handleClickDeleteIcon}>
              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </>
        )}
      </Stack>

      <ConfirmationModal
        isConfirmationModalOpen={isConfirmationModalOpen}
        setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        deleteItem={deleteSelectedTask}
      />
    </Box>
  );
};

export default BoardTask;
