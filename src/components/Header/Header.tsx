import React, { useState } from 'react';
import styles from './header.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  Box,
  createTheme,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ThemeProvider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
  const [state, setState] = useState(false);

  return (
    <ThemeProvider theme={appTheme}>
      <AppBar position="static" className={styles.header}>
        <Toolbar>
          <IconButton
            sx={{ display: { xs: 'flex', lg: 'none' } }}
            onClick={() => {
              setState(!state);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={'left'}
            open={state}
            onClose={() => {
              setState(false);
            }}
          >
            {
              <Box
                className={styles.drawerContent}
                role="presentation"
                onClick={() => setState(false)}
                onKeyDown={() => setState(false)}
              >
                <List>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={APP_ROUTES.WELCOME} color="inherit">
                      <ListItemText primary={'WELCOME'} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={APP_ROUTES.MAIN} color="inherit">
                      <ListItemText primary={'MAIN'} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={`${APP_ROUTES.BOARD}/1`} color="inherit">
                      <ListItemText primary={'BOARD'} />
                    </ListItemButton>
                  </ListItem>
                </List>
                <Divider variant="middle" />
                <List>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={APP_ROUTES.SIGN_IN} color="inherit">
                      <ListItemText primary={'SIGN_IN'} />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton component={Link} to={APP_ROUTES.SIGN_UP} color="inherit">
                      <ListItemText primary={'SIGN_UP'} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            }
          </Drawer>
          <Typography
            variant="h6"
            component="div"
            className={styles.appName}
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            project-management-app
          </Typography>
          <Typography
            variant="h6"
            component="div"
            className={styles.appName}
            sx={{ flexGrow: '1', justifyContent: 'center', display: { xs: 'flex', sm: 'none' } }}
          >
            p-m-a
          </Typography>

          <Box className={styles.nav} sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
              <Button component={Link} to={APP_ROUTES.WELCOME} color="inherit">
                WELCOME
              </Button>
              <Button component={Link} to={APP_ROUTES.MAIN} color="inherit">
                MAIN
              </Button>
              <Button component={Link} to={`${APP_ROUTES.BOARD}/1`} color="inherit">
                BOARD
              </Button>
            </Box>
            <Box
              className={styles.authorisationButtonGroup}
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              <Button component={Link} to={APP_ROUTES.SIGN_IN} variant="outlined" color="inherit">
                SIGN_IN
              </Button>
              <Button component={Link} to={APP_ROUTES.SIGN_UP} color="inherit">
                SIGN_UP
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default Header;
