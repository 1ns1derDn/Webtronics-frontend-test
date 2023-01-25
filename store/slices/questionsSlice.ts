import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface QuestionState {
  openedQuestion: number,
};

const initialState: QuestionState = {
  openedQuestion: 0,
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {
    selectQuestion: (state, action: PayloadAction<number>) => {
      state.openedQuestion = action.payload;
    },
  },
});

export const { selectQuestion } = questionsSlice.actions;

export default questionsSlice.reducer;