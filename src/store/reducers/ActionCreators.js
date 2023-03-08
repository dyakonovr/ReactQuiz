import { store } from '../store'
import { quizSlice } from './QuizSlice'

export const nextQuestion = (isCorrect) => async () => {
  store.dispatch(quizSlice.actions.nextQuestion(isCorrect))
}

export const resetQuiz = () => async () => {
  store.dispatch(quizSlice.actions.resetQuiz());
}