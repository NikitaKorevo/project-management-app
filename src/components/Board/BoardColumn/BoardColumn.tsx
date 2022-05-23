import { FC, useState } from 'react';
import { Box, Button, Divider, Typography } from '@mui/material';
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

  const handleClickButton = (): void => {
    setIsBoardTaskCreationFormOpen(true);
  };

  const allTasksElement = allTasks?.map((task) => {
    const { id, title, description } = task;

    return <BoardTask key={id} title={title} description={description} />;
  });

  return (
    <Box
      sx={{
        boxSizing: 'border-box',
        width: '275px',
        minWidth: '275px',
        backgroundColor: '#fff',
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" component="h2" p={1} align="center">
        {title}
        {` (${order})`}
      </Typography>

      <Divider sx={{ color: 'primary.main' }} />
      {allTasksElement}

      <Button variant="text" onClick={handleClickButton}>
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
