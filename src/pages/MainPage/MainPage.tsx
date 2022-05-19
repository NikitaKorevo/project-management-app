import React, { useState } from 'react';
import styles from './mainPage.module.css';
import { Button, Typography } from '@mui/material';
import BoardList from '../../components/BoardList/BoardList';
import BoardCreationForm from '../../components/BoardCreationForm/BoardCreationForm';

const MainPage: React.FC = () => {
  const [isBoardCreationFormOpen, setIsBoardCreationFormOpen] = useState(false);

  const openModal = () => {
    setIsBoardCreationFormOpen(true);
  };

  return (
    <div className={styles.mainPage}>
      {isBoardCreationFormOpen && (
        <BoardCreationForm
          isBoardCreationFormOpen={isBoardCreationFormOpen}
          setIsBoardCreationFormOpen={setIsBoardCreationFormOpen}
        />
      )}
      <Typography variant="h5" component="h1" m={2}>
        Boards
      </Typography>
      <BoardList />
      <Button variant="outlined" onClick={openModal}>
        add board
      </Button>
    </div>
  );
};

export default MainPage;
