import { FC, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  IconButton,
  LinearProgress,
  List,
  TextField,
  Typography,
} from '@mui/material';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { taskAPI } from '../../../services/taskAPI';
import { columnAPI } from '../../../services/columnAPI';
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal';
import BoardTaskCreationForm from '../BoardTaskCreationForm/BoardTaskCreationForm';
import BoardTask from '../BoardTask/BoardTask';

interface IBoardColumnProps {
  boardId: string;
  columnId: string;
  title: string;
  order: number;
}

const BoardColumn: FC<IBoardColumnProps> = ({ boardId, columnId, title, order }) => {
  const { data: allTasks, isLoading, isError } = taskAPI.useGetAllTasksQuery({ boardId, columnId });
  const [deleteColumn] = columnAPI.useDeleteColumnMutation();
  const [updateColumn] = columnAPI.useUpdateColumnMutation();

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isBoardTaskCreationFormOpen, setIsBoardTaskCreationFormOpen] = useState(false);

  const [isTitleEditMode, setIsTitleEditMode] = useState(false);
  const [textFieldValue, setTextFieldValue] = useState(title);

  const handleClickTitle = (): void => {
    setIsTitleEditMode(true);
  };

  const handleChangeTextFieldTitle = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTextFieldValue(e.target.value);
  };

  const approveTitleChange = (): void => {
    updateColumn({ boardId, columnId, title: textFieldValue, order });
    setIsTitleEditMode(false);
  };

  const cancelTitleChange = (): void => {
    setIsTitleEditMode(false);
    setTextFieldValue(title);
  };

  const handleClickDeleteIcon = (): void => {
    setIsConfirmationModalOpen(true);
  };

  const deleteSelectedColumn = (): void => {
    deleteColumn({ boardId, columnId });
  };

  const openBoardTaskCreationForm = (): void => {
    setIsBoardTaskCreationFormOpen(true);
  };

  const allTasksElement = allTasks?.map((task) => {
    const { id } = task;

    return <BoardTask key={id} taskData={task} />;
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '280px',
        flexShrink: 0,
        order,
        backgroundColor: '#fff',
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {isTitleEditMode ? (
          <>
            <TextField size="small" value={textFieldValue} onChange={handleChangeTextFieldTitle} />

            <IconButton onClick={approveTitleChange}>
              <DoneOutlinedIcon />
            </IconButton>

            <IconButton onClick={cancelTitleChange}>
              <ClearOutlinedIcon />
            </IconButton>
          </>
        ) : (
          <>
            <Typography variant="h6" component="h2" p={1} onClick={handleClickTitle}>
              {`${title} (${order})`}
            </Typography>

            <IconButton onClick={handleClickDeleteIcon}>
              <DeleteIcon />
            </IconButton>
          </>
        )}
      </Box>

      <Divider />

      <Box sx={{ position: 'relative', flexGrow: '1', overflowY: 'auto' }}>
        <List sx={{ display: 'flex', flexDirection: 'column' }}>
          {isLoading && <LinearProgress />}
          {isError && <Typography p={1}>An error has occurred!</Typography>}
          {allTasksElement}
        </List>
      </Box>

      <Divider />

      <Button variant="text" onClick={openBoardTaskCreationForm}>
        add task
      </Button>

      {isBoardTaskCreationFormOpen && (
        <BoardTaskCreationForm
          isFormOpen={isBoardTaskCreationFormOpen}
          setIsFormOpen={setIsBoardTaskCreationFormOpen}
          columnId={columnId}
        />
      )}

      <ConfirmationModal
        isConfirmationModalOpen={isConfirmationModalOpen}
        setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        deleteItem={deleteSelectedColumn}
      />
    </Box>
  );
};

export default BoardColumn;
