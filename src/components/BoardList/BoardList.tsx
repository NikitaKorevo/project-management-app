import React, { useState } from 'react';
import {
  Box,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { boardAPI } from '../../services/boardAPI';
import { IAllBoards } from '../../types/interfaces';
import { useNavigate } from 'react-router-dom';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';

const BoardList: React.FC = () => {
  const { data, error, isLoading, isFetching } = boardAPI.useGetAllBoardsQuery();
  const [createBoard, {}] = boardAPI.useCreateBoardMutation();
  const [deleteBoard, {}] = boardAPI.useDeleteBoardMutation();
  const navigate = useNavigate();
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);
  const [idSelectedBoard, setIdSelectedBoard] = useState('');

  const navigateToBoard = (boardId: string): void => {
    navigate(`board/${boardId}`);
  };

  const handleClickDeleteIcon = (boardId: string): void => {
    setIdSelectedBoard(boardId);
    setIsConfirmationModalOpen(true);
  };

  const deleteSelectedBoard = () => {
    deleteBoard(idSelectedBoard);
  };

  const allBoardsElement = data?.map((board: IAllBoards, index) => {
    const { id, title, description } = board;
    return (
      <div key={id}>
        {index !== 0 && <Divider variant="middle" />}
        <ListItem>
          <ListItemText
            primary={title}
            secondary={description}
            sx={{ cursor: 'pointer' }}
            onClick={() => navigateToBoard(id)}
          />
          <DeleteIcon sx={{ cursor: 'pointer' }} onClick={() => handleClickDeleteIcon(id)} />
        </ListItem>
      </div>
    );
  });

  if (isFetching) {
    return (
      <div>
        <Stack alignItems="center" mt={2} mb={2}>
          <CircularProgress />
        </Stack>
      </div>
    );
  }

  return (
    <div>
      {error && <Typography>An error has occurred!</Typography>}
      <ConfirmationModal
        isConfirmationModalOpen={isConfirmationModalOpen}
        setIsConfirmationModalOpen={setIsConfirmationModalOpen}
        deleteItem={deleteSelectedBoard}
      />
      <Box>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>

      <List
        sx={{
          width: '100%',
          maxWidth: 500,
          bgcolor: 'background.paper',
          borderRadius: 2,
          margin: 2,
        }}
      >
        {allBoardsElement}
      </List>

      <button
        onClick={() => createBoard({ title: 'something', description: 'this is description' })}
      >
        post boards
      </button>
    </div>
  );
};

export default BoardList;
