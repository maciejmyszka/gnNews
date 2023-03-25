import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../config/store';

const initialState: any = {
  isList: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsList: (state, action) => {
      state.isList = action.payload;
    },
  },
});

export const { setIsList } = appSlice.actions;

export const appState = (state: RootState) => state.app;

export default appSlice.reducer;
