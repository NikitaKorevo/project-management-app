import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBasisState {
  language: string;
  token: string;
}

const initialState: IBasisState = {
  language: 'en',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjMTc4OGI0NC1lZWFkLTRlZDMtOGJiMS1jNTFiY2IyMDU3MzMiLCJsb2dpbiI6Im5pa2l0YSIsImlhdCI6MTY1Mjc4NDUxM30.Q-2gwFB2BxQpewT0u9XLn3Cd3Yna05z5SM9mf_456q8',
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
