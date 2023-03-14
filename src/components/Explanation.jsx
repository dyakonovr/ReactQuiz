import { store } from '../store/store';
import { setExplanationIsShowed, nextQuestion } from '../store/reducers/ActionCreators';

function Explanation({ currentQuestion, rightAnswer, currentExplanation }) {
  // Функции
  function handleButtonClick() {
    store.dispatch(setExplanationIsShowed());
    store.dispatch(nextQuestion());
  }
  // Функции END
  return (
    <div className='window'>
      <p className='window__counter'>{currentQuestion}</p>
      <p className='window__counter'>Правильный ответ: {rightAnswer}</p>
      <span className="window__title">Пояснение</span>
      <p className='window__text'>{currentExplanation}</p>
      <button className='window__btn window__btn--fullwidth' onClick={handleButtonClick}>Теперь понятно. Идем дальше!</button>
    </div>
  );
};

export default Explanation;