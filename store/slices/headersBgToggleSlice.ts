import { createSlice } from '@reduxjs/toolkit';

export interface HeaderBgToggleSlice {
  isShown: boolean,
};

const initialState: HeaderBgToggleSlice = {
  isShown: false,
};

export const headerBgToggleSlice = createSlice({
  name: 'headerShow',
  initialState,
  reducers: {
    showHeadersBg: (state) => {
      if (!state.isShown) {
        state.isShown = true;
      }
    },
    hideHeadersBg: (state) => {
      if (state.isShown) {
        state.isShown = false;
      }
    },
  },
});

export const { showHeadersBg, hideHeadersBg } = headerBgToggleSlice.actions;

export default headerBgToggleSlice.reducer;