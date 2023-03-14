import { store } from '../store'
import { quizSlice } from './QuizSlice'

export const nextQuestion = (isCorrect) => async () => {
  store.dispatch(quizSlice.actions.nextQuestion(isCorrect))
}

export const resetQuiz = () => async () => {
  store.dispatch(quizSlice.actions.resetQuiz());
}

export const setDifficulty = (value) => async () => {
  store.dispatch(quizSlice.actions.setDifficulty(value));
}

export const finishQuiz = () => async () => {
  store.dispatch(quizSlice.actions.finishQuiz());
}

export const setExplanationIsNeeded = () => async () => {
  store.dispatch(quizSlice.actions.setExplanationIsNeeded());
}

export const setExplanationIsShowed = () => async () => {
  store.dispatch(quizSlice.actions.setExplanationIsShowed());
}