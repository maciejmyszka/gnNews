import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'config/store';

interface InitialState {
  isList: boolean;
}

const initialState: InitialState = {
  isList: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsList: (state, action: PayloadAction<boolean>) => {
      state.isList = action.payload;
    },
  },
});

export const { setIsList } = appSlice.actions;

export const appState = (state: RootState) => state.app;

export default appSlice.reducer;
