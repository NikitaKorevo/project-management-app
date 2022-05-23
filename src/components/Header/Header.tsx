import React from 'react';
import styles from './header.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material';
import APP_ROUTES from '../../constants/appRoutes';
import { Link } from 'react-router-dom';

const appTheme = createTheme({
  palette: {
    primary: {
      main: '#ffa5006b',
    },
  },
});

const Header: React.FC = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <AppBar position="static" className={styles.header}>
        <Toolbar>
          <Typography variant="h6" component="div" className={styles.appName}>
            project-management-app
          </Typography>

          <nav className={styles.nav}>
            <Button component={Link} to={APP_ROUTES.WELCOME} color="inherit">
              WELCOME
            </Button>
            <Button component={Link} to={APP_ROUTES.MAIN} color="inherit">
              MAIN
            </Button>
            <Button component={Link} to={`${APP_ROUTES.BOARD}/1`} color="inherit">
              BOARD
            </Button>
            <div className={styles.authorisationButtonGroup}>
              <Button component={Link} to={APP_ROUTES.SIGN_IN} variant="outlined" color="inherit">
                SIGN_IN
              </Button>
              <Button component={Link} to={APP_ROUTES.SIGN_UP} color="inherit">
                SIGN_UP
              </Button>
            </div>
          </nav>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default Header;
