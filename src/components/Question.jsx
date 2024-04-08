import { store } from '../store/store';
import { finishQuiz } from '../store/reducers/ActionCreators';

function Question({ answers, title, counter, questionsQuantity, isQuizQuestion, isGuessQuestion }) {
  return (
    <div className='window'>
      <div className='window__header'>
        <span className="window__counter">Вопрос №{counter + 1} из {questionsQuantity}</span>
        <span className='window__link' onClick={() => store.dispatch(finishQuiz())}>Завершить тест досрочно</span>
      </div>
      <strong className='window__title'>{title}</strong>
      {
        !isGuessQuestion 
          ?
          <ul className={isQuizQuestion ? "window__list window__list--grid" : "window__list"}>
            {answers}
          </ul>
          :
          <div className='window__wrapper'>
            {answers}
          </div>
      }
    </div>
  );
};

export default Question;