import { FC, useState } from 'react';
import { Box, Button, Divider, IconButton, LinearProgress, List, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BoardTask from '../BoardTask/BoardTask';
import { taskAPI } from '../../../services/taskAPI';
import BoardTaskCreationForm from '../BoardTaskCreationForm/BoardTaskCreationForm';
import { columnAPI } from '../../../services/columnAPI';
import ConfirmationModal from '../../ConfirmationModal/ConfirmationModal';

interface IBoardColumnProps {
  boardId: string;
  columnId: string;
  title: string;
  order: number;
}

const BoardColumn: FC<IBoardColumnProps> = ({ boardId, columnId, title, order }) => {
  const { data: allTasks, isLoading, isError } = taskAPI.useGetAllTasksQuery({ boardId, columnId });
  const [deleteColumn] = columnAPI.useDeleteColumnMutation();
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [isBoardTaskCreationFormOpen, setIsBoardTaskCreationFormOpen] = useState(false);

  const openBoardTaskCreationForm = (): void => {
    setIsBoardTaskCreationFormOpen(true);
  };

  const handleClickDeleteIcon = (): void => {
    setIsConfirmationModalOpen(true);
  };

  const deleteSelectedColumn = (): void => {
    deleteColumn({ boardId, columnId });
  };

  const allTasksElement = allTasks?.map((task) => {
    const { id, title, description } = task;

    return <BoardTask key={id} title={title} description={description} />;
  });

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '275px',
        flexShrink: 0,
        backgroundColor: '#fff',
        borderRadius: 2,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" component="h2" p={1}>
          {`${title} (${order})`}
        </Typography>
        <IconButton onClick={handleClickDeleteIcon}>
          <DeleteIcon />
        </IconButton>
      </Box>

      <Divider />

      <Box sx={{ position: 'relative', flexGrow: '1', overflowY: 'auto' }}>
        <List>
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
