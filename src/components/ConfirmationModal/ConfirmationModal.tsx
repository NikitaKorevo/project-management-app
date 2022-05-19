import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

interface IConfirmationModalProps {
  isConfirmationModalOpen: boolean;
  setIsConfirmationModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteItem: () => void;
}

const ConfirmationModal: React.FC<IConfirmationModalProps> = ({
  isConfirmationModalOpen,
  setIsConfirmationModalOpen,
  deleteItem,
}) => {
  const handleCloseModal = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleClickDisagreeButton = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleClickAgreeButton = () => {
    deleteItem();
    setIsConfirmationModalOpen(false);
  };

  return (
    <Dialog
      open={isConfirmationModalOpen}
      onClose={handleCloseModal}
      aria-labelledby="alert-dialog-title"
    >
      <DialogTitle id="alert-dialog-title">Delete this information?</DialogTitle>
      <DialogContent></DialogContent>
      <DialogActions>
        <Button onClick={handleClickDisagreeButton}>Disagree</Button>
        <Button onClick={handleClickAgreeButton}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
