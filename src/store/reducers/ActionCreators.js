import { store } from '../store'
import { quizSlice } from './QuizSlice'
import axios from 'axios'

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

export const setExplanationIsShowed = (isCorrect) => async () => {
  if (isCorrect) store.dispatch(quizSlice.actions.rightAnswer());
  store.dispatch(quizSlice.actions.setExplanationIsShowed());
}

export const setUsername = (username) => async () => {
  store.dispatch(quizSlice.actions.setUsername(username));
}

export const setGameType = (type) => async () => {
  store.dispatch(quizSlice.actions.setGameType(type));
}

export const setShuffledList = (list) => async () => {
  store.dispatch(quizSlice.actions.setShuffledList(list));
}

export const setUserData = (username) => async () => {
  const responseWithID = await axios.get(`/api/userdata/${username}`);
  const id = responseWithID.data.id;

  const responseWithScores = await axios.get(`/api/userscoreview/${id}`);
  const responseWithToken = await axios.get(`/api/token/${id}`);
  const obj = {
    scores: {
      easy: responseWithScores.data.user_score_easy,
      medium: responseWithScores.data.user_score_medium,
      hard: responseWithScores.data.user_score_hard
    },
    id,
    token: responseWithToken.data.key
  };

  store.dispatch(quizSlice.actions.setUserData(obj));
}

export const setNewUserscore = (userID, score, currentDifficulty, needToUpdate, token) => async () => {
  store.dispatch(quizSlice.actions.updateUserScore({ score, currentDifficulty }));

  if (needToUpdate) {
    if (currentDifficulty === "easy") {
      axios.put(`/api/userscore/${userID}/`, {
        "user": userID,
        "user_score_easy": score,
      }, {
        headers: {
          'Authorization': `Token ${token}`,
        }
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      })
    }

    else if (currentDifficulty === "medium") {      
      axios.put(`/api/userscore/${userID}/`, {
        "user": userID,
        "user_score_medium": score,
      }, {
        headers: {
          'Authorization': `Token ${token}`,
        }
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      })
    }

    else if (currentDifficulty === "hard") {      
      axios.put(`/api/userscore/${userID}/`, {
        "user": userID,
        "user_score_hard": score,
      }, {
        headers: {
          'Authorization': `Token ${token}`,
        }
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      })
    }
  }
}  