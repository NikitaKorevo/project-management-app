import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBasisState {
  language: string;
  token: string;
  userId: string;
}

const initialState: IBasisState = {
  language: 'en',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJkNzQ5NjliNy1iNzlkLTQ3M2YtOTVmMi03OTM0MjFiNGUwYzUiLCJsb2dpbiI6Im5pa2l0YSIsImlhdCI6MTY1MzI0MzQ3Mn0.0SWjMcnA_9ub0J8LVrlMQVuaeVIuGUUST9KdEnRKelI',
  userId: 'd74969b7-b79d-473f-95f2-793421b4e0c5',
};

const basisSlice = createSlice({
  name: 'basis',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = basisSlice.actions;
export default basisSlice.reducer;
