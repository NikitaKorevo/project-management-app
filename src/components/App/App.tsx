import React from 'react';
import styles from './app.module.css';
import AppRouter from '../AppRouter/AppRouter';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};

export default App;
