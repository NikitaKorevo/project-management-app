import React, { useState } from 'react';
import styles from './header.module.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import APP_ROUTES from '../../constants/appRoutes';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [sideMenuState, setSideMenuState] = useState(false);

  return (
    <AppBar position="static" className={styles.header}>
      <Toolbar>
        <IconButton
          sx={{ display: { xs: 'flex', lg: 'none' }, marginRight: { xs: '0', sm: '1em' } }}
          onClick={() => {
            setSideMenuState(!sideMenuState);
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={'left'}
          open={sideMenuState}
          onClose={() => {
            setSideMenuState(false);
          }}
        >
          {
            <Box
              sx={{ width: '200px', padding: '2em 0 0 0' }}
              className={styles.drawerContent}
              role="presentation"
              onClick={() => setSideMenuState(false)}
              onKeyDown={() => setSideMenuState(false)}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to={APP_ROUTES.WELCOME} color="inherit">
                    <ListItemText primary={'WELCOME'} sx={{ padding: '0 0 0 1em' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to={APP_ROUTES.MAIN} color="inherit">
                    <ListItemText primary={'MAIN'} sx={{ padding: '0 0 0 1em' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to={`${APP_ROUTES.BOARD}/1`} color="inherit">
                    <ListItemText primary={'BOARD'} sx={{ padding: '0 0 0 1em' }} />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider variant="middle" />
              <List>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to={APP_ROUTES.SIGN_IN} color="inherit">
                    <ListItemText primary={'SIGN_IN'} sx={{ padding: '0 0 0 1em' }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton component={Link} to={APP_ROUTES.SIGN_UP} color="inherit">
                    <ListItemText primary={'SIGN_UP'} sx={{ padding: '0 0 0 1em' }} />
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
          sx={{ display: { xs: 'none', sm: 'flex' }, marginRight: '1em' }}
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
  );
};
export default Header;
