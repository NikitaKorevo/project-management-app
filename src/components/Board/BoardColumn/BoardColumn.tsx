import { FC, useEffect } from 'react';
import { Box, Button } from '@mui/material';
import BoardTask from '../BoardTask/BoardTask';
import { taskAPI } from '../../../services/taskAPI';

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
      <Button variant="outlined">add task</Button>
    </Box>
  );
};

export default BoardColumn;
