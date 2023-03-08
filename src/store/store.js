import { combineReducers, configureStore } from '@reduxjs/toolkit';
import quizReducer from "./reducers/QuizSlice";

const rootReducer = combineReducers({ quizReducer });

export const store = configureStore({
  reducer: rootReducer,
});