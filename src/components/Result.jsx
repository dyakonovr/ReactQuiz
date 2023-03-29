import { useSelector } from 'react-redux';
import { store } from '../store/store';
import { resetQuiz, setGameType } from '../store/reducers/ActionCreators';
import { useEffect } from 'react';
import { setNewUserscore } from './../store/reducers/ActionCreators';

const Result = () => {
  const { rightAnswers, questionsQuantityByExplanation, currentDifficulty, reactions,
    userID, userscores, userToken, gameType } = useSelector(state => state.quizReducer);
  
  const questionsQuantity = gameType === "test" ? questionsQuantityByExplanation.test[currentDifficulty] : questionsQuantityByExplanation.quiz;
  let percent = Math.round(rightAnswers / questionsQuantity);

  useEffect(() => {
    store.dispatch(setNewUserscore(userID, rightAnswers, currentDifficulty, rightAnswers > userscores[currentDifficulty], userToken));
  })

  // Функции
  function createReaction(percent) {
    if (percent <= 0.3) {
      return reactions[0];
    } else if (0.3 < percent < 0.6) {
      return reactions[1];
    } else if (percent >= 0.6) {
      return reactions[2];
    }
  }
  // Функции END

  return (
    <div className='window window--center'>
      <strong className='window__title'>Вы ответили правильно на {rightAnswers} вопроса из {questionsQuantity}. {createReaction(percent)}</strong>
      <div className='window__btns-row'>
        <button type='button' className='window__answer-btn window__answer-btn--default'
          onClick={() => { store.dispatch(resetQuiz()) }}>Попробуем ещё раз?</button>
        <button type='button' className='window__answer-btn window__answer-btn--default' onClick={() => {
          store.dispatch(setGameType(null));
          store.dispatch(resetQuiz());
        }}>Вернуться в главное меню</button>
      </div>
    </div>
  );
}

export default Result;