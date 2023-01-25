import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { reviewsData } from '../../data/reviewsData';

export interface ReviewState {
  selectedReview: number,
};

const initialState: ReviewState = {
  selectedReview: 0,
};

export const reviewSlice = createSlice({
  name: 'rewiews',
  initialState,
  reducers: {
    nextReview: (state) => {
      const newState = state.selectedReview + 1;
      const maxId = reviewsData.length - 1;
      if (newState <= maxId) {
        state.selectedReview = newState;
      } else {
        state.selectedReview = newState - reviewsData.length;
      }
    },
    prevReview: (state) => {
      const newState = state.selectedReview - 1;
      const maxId = reviewsData.length - 1;
      const minId = 0;
      if (newState >= minId) {
        state.selectedReview = newState;
      } else {
        state.selectedReview = newState + maxId;
      }
    },
    selectReview: (state, action: PayloadAction<number>) => {
      state.selectedReview = action.payload;
    },
  },
});

export const { nextReview, prevReview, selectReview } = reviewSlice.actions;

export default reviewSlice.reducer;