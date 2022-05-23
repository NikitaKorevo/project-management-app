import React from 'react';
import styles from './welcomePage.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setLanguage } from '../../store/reducers/basisSlice';
import Typography from '@mui/material/Typography';
import { Card, CardContent } from '@mui/material';

const WelcomePage: React.FC = () => {
  const { language } = useAppSelector((state) => state.basis);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.welcomePage}>
      {/*<div className="DELETE_BLOCK">
        <button onClick={() => dispatch(setLanguage('ru'))}>change language in state</button>
        <p>{language}</p>
      </div>*/}

      <div className={styles.commonInfo}>
        <div className={styles.commonInfoHead}>
          <Typography variant="h1" component="div" className={styles.appName}>
            Welcome to
            <Typography variant="h2" component="div">
              Project-management-app
            </Typography>
          </Typography>
        </div>
        <Typography className={styles.commonInfoDescription}>
          A project management system - is an application that helps an individual in a team or
          group of developers achieve their goals.
        </Typography>
      </div>
      <div className={styles.teamInfo}>
        <Typography className={styles.teamInfoHead}>Developed by team:</Typography>
        <div className={styles.teamInfoContent}>
          <Card>
            <CardContent>
              <Typography>Nikita Korevo</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography>Alex Mz</Typography>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography>Alexey Gerasimchuk</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <Typography className={styles.taskInfo}>final task of REACT 2022Q1 course</Typography>
    </div>
  );
};

export default WelcomePage;
