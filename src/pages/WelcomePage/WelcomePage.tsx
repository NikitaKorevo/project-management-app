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
        <div>
          <div>
            Welcome to: Project-management-app
            <div>
              A project management system - is an application that helps an individual in a team or
              group of developers achieve their goals.
            </div>
          </div>
          <div>
            <div>Developed by team:</div>
            <div>
              <div>Nikita Korevo</div>
              <div>Alex Mz</div>
              <div>Alexey Gerasimchuk</div>
            </div>
          </div>
          <div>final task of REACT 2022Q1 course</div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
