import { FC, useState } from 'react';
import { Box, IconButton, Stack, Typography } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal';
import { taskAPI } from '../../../services/taskAPI';
import { ITask } from '../../../types/ITask';

interface IBoardTaskProps {
  boardId: string;
  columnId: string;
  taskData: ITask;
}

const BoardTask: FC<IBoardTaskProps> = ({
  boardId,
  columnId,
  taskData: { id, title, description },
}) => {
  const [deleteTask] = taskAPI.useDeleteTaskMutation();
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleClickDeleteIcon = (): void => {
    setIsConfirmationModalOpen(true);
  };

  const deleteSelectedTask = (): void => {
    deleteTask({ boardId, columnId, taskId: id });
  };

  return (
    <Box
      sx={{
        m: 1,
        p: 1,
        border: '1px solid rgba(25, 118, 210, 0.5)',
        borderRadius: 1,
      }}
    >
      <Typography variant="body1" component="h3">
        {title}
      </Typography>

      <Typography variant="body2">{description}</Typography>

      <Stack direction="row" justifyContent="flex-end" spacing={1}>
        <IconButton size="small">
          <EditOutlinedIcon />
        </IconButton>

        <IconButton size="small" onClick={handleClickDeleteIcon}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
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
