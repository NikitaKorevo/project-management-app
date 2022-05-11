import { configureStore } from '@reduxjs/toolkit';
import basisSlice from './reducers/basisSlice';
import userSlice from './reducers/userSlice';

export const store = configureStore({
  reducer: {
    basis: basisSlice,
    user: userSlice,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
