import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import React from 'react';

interface IBoardCreationFormProps {
  isBoardCreationFormOpen: boolean;
  setIsBoardCreationFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BoardCreationForm: React.FC<IBoardCreationFormProps> = ({
  isBoardCreationFormOpen,
  setIsBoardCreationFormOpen,
}) => {
  const handleCloseModal = () => {
    setIsBoardCreationFormOpen(false);
  };

  const handleClickDisagreeButton = () => {
    setIsBoardCreationFormOpen(false);
  };

  const handleClickAgreeButton = () => {
    setIsBoardCreationFormOpen(false);
  };

  return (
    <Dialog
      open={isBoardCreationFormOpen}
      onClose={handleCloseModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClickDisagreeButton}>Disagree</Button>
        <Button onClick={handleClickAgreeButton} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BoardCreationForm;
