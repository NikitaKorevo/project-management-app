import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBasisState {
  language: string;
}

const initialState: IBasisState = {
  language: 'en',
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
