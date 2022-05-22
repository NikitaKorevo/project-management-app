import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { columnAPI } from '../../services/columnAPI';
import BoardColumn from './BoardColumn/BoardColumn';
import Spinner from '../Spinner/Spinner';
import BoardColumnCreationForm from './BoardColumnCreationForm/BoardColumnCreationForm';

const Board: FC = () => {
  const { boardId = '' } = useParams();
  const {
    data: allColumns,
    isLoading,
    isFetching,
    isError,
  } = columnAPI.useGetAllColumnsQuery(boardId);
  const [isBoardCreationFormOpen, setIsBoardCreationFormOpen] = useState(false);

  const handleClickButton = () => {
    setIsBoardCreationFormOpen(true);
  };

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

        <Button
          sx={{ marginBottom: 2, alignSelf: 'start' }}
          variant="outlined"
          onClick={handleClickButton}
        >
          add column
        </Button>

        {isBoardCreationFormOpen && (
          <BoardColumnCreationForm
            isFormOpen={isBoardCreationFormOpen}
            setIsFormOpen={setIsBoardCreationFormOpen}
          />
        )}
      </Box>
    </div>
  );
};

export default Board;
