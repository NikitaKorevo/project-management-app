import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import APP_ROUTES from '../../constants/appRoutes';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to={APP_ROUTES.WELCOME}>WELCOME</Link>
        <Link to={APP_ROUTES.MAIN}>MAIN</Link>
        <Link to={APP_ROUTES.SIGN_IN}>SIGN_IN</Link>
        <Link to={APP_ROUTES.SIGN_UP}>SIGN_UP</Link>
        <Link to={APP_ROUTES.NOT_FOUND}>NOT_FOUND</Link>
      </nav>
    </header>
  );
};

export default Header;
