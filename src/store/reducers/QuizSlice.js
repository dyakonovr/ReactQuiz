import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: {
    "easy": {
      "1Какой-то первый вопрос?": { answers: { "Какой-то очень-очень-очень-ОЧЕНЬ длинный ответ для нормальной реализации проекта React JSX Redux Backend": 1, "Второй ответ": 0, "Третий ответ": 0 }, explanations: ["Dadada", "Netnetnet", "Ugu"] },
      "1Какой-то второй вопрос?": { answers: { "Random answer easy": 1, "Yep": 0, "Fuck": 0 }, explanations: ["Dadada", "Netnetnet", "Ugu"] },
      "1Какой-то третий вопрос?": { answers: { "Oh no": 1, "Oh yes": 0, "Bullshit": 0 }, explanations: ["Dadada", "Netnetnet", "Ugu"] }
    },
    "medium": {
      "2Какой-то первый вопрос?": { answers: { "Какой-то очень-очень-очень-ОЧЕНЬ длинный ответ для нормальной реализации проекта React JSX Redux Backend": 1, "Второй ответ": 0, "Третий ответ": 0 }, explanations: ["Dadada", "Netnetnet", "Ugu"] },
      "2Какой-то второй вопрос?": { answers: { "Random answer easy": 1, "Yep": 0, "Fuck": 0 }, explanations: ["Dadada", "Netnetnet", "Ugu"] },
      "2Какой-то третий вопрос?": { answers: { "Oh no": 1, "Oh yes": 0, "Bullshit": 0 }, explanations: ["Dadada", "Netnetnet", "Ugu"] }
    },
    "hard": {
      "3Какой-то первый вопрос?": { answers: { "Какой-то очень-очень-очень-ОЧЕНЬ длинный ответ для нормальной реализации проекта React JSX Redux Backend": 1, "Второй ответ": 0, "Третий ответ": 0 }, explanations: ["Dadada", "Netnetnet", "Ugu"] },
      "3Какой-то второй вопрос?": { answers: { "Random answer easy": 1, "Yep": 0, "Fuck": 0 }, explanations: ["Dadada", "Netnetnet", "Ugu"] },
      "3Какой-то третий вопрос?": { answers: { "Oh no": 1, "Oh yes": 0, "Bullshit": 0 }, explanations: ["Dadada", "Netnetnet", "Ugu"] }
    }
  },
  counter: 0,
  rightAnswers: 0,
  quizIsDone: false,
  questionsQuantity: 3,
  reactions: ['Надо подучить!', 'Неплохо!', 'Отличнооо!'],
  currentDifficulty: null,
  explanationIsNeeded: false,
  explanationIsShowed: false,
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

    finishQuiz: (state) => {
      state.quizIsDone = true;
    },

    rightAnswer: (state) => {
      state.rightAnswers += 1;
    },

    resetQuiz: (state) => {
      state.quizIsDone = false;
      state.counter = 0;
      state.rightAnswers = 0;
      state.currentDifficulty = null;
      state.explanationIsNeeded = false;
    },

    setDifficulty: (state, { payload }) => {
      state.currentDifficulty = payload;
    },

    setExplanationIsNeeded: (state) => {
      state.explanationIsNeeded = !state.explanationIsNeeded;
    },

    setExplanationIsShowed: (state) => {
      state.explanationIsShowed = !state.explanationIsShowed;
    }

  }
})

export default quizSlice.reducer;