import { configureStore } from '@reduxjs/toolkit';
import headerBgToggleReducer from './slices/headersBgToggleSlice';
import questionReducer from './slices/questionsSlice';
import reviewReducer from './slices/reviewsSlice';

export const store = configureStore({
  reducer: {
    questions: questionReducer,
    rewiews: reviewReducer,
    headerShow: headerBgToggleReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;