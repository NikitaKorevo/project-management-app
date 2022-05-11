import React from 'react';
import styles from './boardPage.module.css';
import { useParams } from 'react-router-dom';

const BoardPage: React.FC = () => {
  const { boardId } = useParams();

  return (
    <div className={styles.boardPage}>
      <p>BoardPage {boardId}</p>
    </div>
  );
};

export default BoardPage;
