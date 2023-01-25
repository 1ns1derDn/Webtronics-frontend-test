import { configureStore } from '@reduxjs/toolkit';
import questionReducer from './slices/questionsSlice';
import reviewReducer from './slices/reviewsSlice';

export const store = configureStore({
  reducer: {
    questions: questionReducer,
    rewiews: reviewReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;