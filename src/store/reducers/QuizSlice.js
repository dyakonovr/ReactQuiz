import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: {
    "Какой-то первый вопрос?": { "Какой-то очень-очень-очень-ОЧЕНЬ длинный ответ для нормальной реализации проекта React JSX Redux Backend": 1, "Второй ответ": 0, "Третий ответ": 0 },
    "Какой-то второй вопрос?": { "Другой ответ": 0, "Lorem ru 15": 1, "Четыре)": 0 },
    "Какой-то третий вопрос?": { "Aaaaa": 1, "Bbbbb": 0, "E200 2022 года": 0 }
  },
  counter: 0,
  rightAnswers: 0,
  quizIsDone: false,
  questionsQuantity: 3,
  reactions: ['Надо подучить!', 'Неплохо!', 'Отличнооо!']
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    nextQuestion: (state, { payload }) => {

      if (state.counter + 1 === state.questionsQuantity) {
        state.quizIsDone = true;
      }

      if (payload === 1) {
        state.rightAnswers += 1;
      }

      state.counter += 1;
    },

    rightAnswer: (state) => {
      state.rightAnswers += 1;
    },

    resetQuiz: (state) => {
      state.quizIsDone = false;
      state.counter = 0;
      state.rightAnswers = 0;
    }
  }
})

export default quizSlice.reducer;