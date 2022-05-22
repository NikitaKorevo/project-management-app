import React, { useEffect } from 'react';
import styles from './boardPage.module.css';
import { useParams } from 'react-router-dom';
import { columnAPI } from '../../services/columnAPI';
import Board from '../../components/Board/Board';

const BoardPage: React.FC = () => {
  /* const [createColumn, result] = columnAPI.useCreateColumnMutation(); */

  useEffect(() => {
    /* createColumn({
      boardId,
      ...{
        title: 'Dones',
        order: 3,
      },
    }); */
  }, []);

  return (
    <div className={styles.boardPage}>
      <Board />
    </div>
  );
};

export default BoardPage;
