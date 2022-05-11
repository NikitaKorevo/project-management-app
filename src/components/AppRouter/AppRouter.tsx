import React from 'react';
import { Route, Routes } from 'react-router-dom';
import APP_ROUTES from '../../constants/appRoutes';
import WelcomePage from '../../pages/WelcomePage/WelcomePage';
import MainPage from '../../pages/MainPage/MainPage';
import BoardPage from '../../pages/BoardPage/BoardPage';
import SignUpPage from '../../pages/SignUpPage/signUpPage';
import SignInPage from '../../pages/SignInPage/SignInPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={APP_ROUTES.WELCOME} element={<WelcomePage />} />
      <Route path={APP_ROUTES.MAIN} element={<MainPage />} />
      <Route path={`${APP_ROUTES.BOARD}/:boardId`} element={<BoardPage />} />
      <Route path={APP_ROUTES.SIGN_IN} element={<SignInPage />} />
      <Route path={APP_ROUTES.SIGN_UP} element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
