import { configureStore } from '@reduxjs/toolkit';
import { boardAPI } from '../services/boardAPI';
import basisSlice from './reducers/basisSlice';
import userSlice from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    [boardAPI.reducerPath]: boardAPI.reducer,
    basis: basisSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(boardAPI.middleware);
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
