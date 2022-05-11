import React from 'react';
import styles from './welcomePage.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setLanguage } from '../../store/reducers/basisSlice';

const WelcomePage: React.FC = () => {
  const { language } = useAppSelector((state) => state.basis);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.welcomePage}>
      <p>WelcomePage</p>

      <div className="DELETE_BLOCK">
        <button onClick={() => dispatch(setLanguage('ru'))}>change language in state</button>
        <p>{language}</p>
      </div>
    </div>
  );
};

export default WelcomePage;
