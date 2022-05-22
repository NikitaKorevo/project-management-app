import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { columnAPI } from '../../services/columnAPI';
import BoardColumn from './BoardColumn/BoardColumn';
import Spinner from '../Spinner/Spinner';

const Board: FC = () => {
  const { boardId = '' } = useParams();
  const {
    data: allColumns,
    isLoading,
    isFetching,
    isError,
  } = columnAPI.useGetAllColumnsQuery(boardId);

  const columnsElement = allColumns?.map((column) => {
    const { id, title, order } = column;
    return (
      <BoardColumn key={id} boardId={boardId} columnId={column.id} title={title} order={order} />
    );
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Box sx={{ display: 'flex', columnGap: 1 }}>
        {columnsElement}
        <Button sx={{ marginBottom: 2, alignSelf: 'start' }} variant="outlined">
          add column
        </Button>
      </Box>
    </div>
  );
};

export default Board;
