import React, { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import { boardAPI } from '../../services/boardAPI';

interface IBoardCreationFormProps {
  isBoardCreationFormOpen: boolean;
  setIsBoardCreationFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BoardCreationForm: React.FC<IBoardCreationFormProps> = ({
  isBoardCreationFormOpen,
  setIsBoardCreationFormOpen,
}) => {
  const [createBoard, {}] = boardAPI.useCreateBoardMutation();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCloseModal = () => {
    setIsBoardCreationFormOpen(false);
  };

  const handleClickDisagreeButton = () => {
    setIsBoardCreationFormOpen(false);
  };

  const handleClickAgreeButton = () => {
    createBoard({ title, description });
    setIsBoardCreationFormOpen(false);
  };

  return (
    <Dialog
      open={isBoardCreationFormOpen}
      onClose={handleCloseModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{'Create board'}</DialogTitle>
      <DialogContent>
        <Box m={1}>
          <TextField
            id="outlined-basic"
            label="name"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClickDisagreeButton}>Disagree</Button>
        <Button onClick={handleClickAgreeButton}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

export default BoardCreationForm;
