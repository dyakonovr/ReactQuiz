import { useSelector } from 'react-redux';
import { store } from '../store/store';
import { resetQuiz } from '../store/reducers/ActionCreators';

const Result = () => {
  const { rightAnswers, questionsQuantity, reactions } = useSelector(state => state.quizReducer);
  let percent = Math.round(rightAnswers / questionsQuantity);

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
      <button type='button' className='window__btn' onClick={() => { store.dispatch(resetQuiz()) }}>Попробуем ещё раз?</button>
    </div>
  );
}

export default Result;