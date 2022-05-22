import { FC, useState } from 'react';
import { Box, Button } from '@mui/material';
import BoardTask from '../BoardTask/BoardTask';
import { taskAPI } from '../../../services/taskAPI';
import BoardTaskCreationForm from '../BoardTaskCreationForm/BoardTaskCreationForm';

interface IBoardColumnProps {
  boardId: string;
  columnId: string;
  title: string;
  order: number;
}

const BoardColumn: FC<IBoardColumnProps> = ({ boardId, columnId, title, order }) => {
  const {
    data: allTasks,
    isLoading,
    isFetching,
    isError,
  } = taskAPI.useGetAllTasksQuery({ boardId, columnId });
  const [isBoardTaskCreationFormOpen, setIsBoardTaskCreationFormOpen] = useState(false);

  const handleClickButton = () => {
    setIsBoardTaskCreationFormOpen(true);
  };

  const allTasksElement = allTasks?.map((task) => {
    const { id, title } = task;

    return <BoardTask key={id} title={title} />;
  });

  return (
    <Box
      sx={{
        height: '100px',
        minWidth: '250px',
        border: '1px solid rgba(25, 118, 210, 0.5)',
      }}
    >
      {order}
      {title}
      {allTasksElement}
      <Button variant="outlined" onClick={handleClickButton}>
        add task
      </Button>

      {isBoardTaskCreationFormOpen && (
        <BoardTaskCreationForm
          isFormOpen={isBoardTaskCreationFormOpen}
          setIsFormOpen={setIsBoardTaskCreationFormOpen}
          columnId={columnId}
        />
      )}
    </Box>
  );
};

export default BoardColumn;
