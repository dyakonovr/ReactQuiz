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
            <img className='window__img' src="https://newisty.com/public/assets/static/images/tools/content/106bbfb64c995bd2ad3186786a-bpsc-image-size.webp?ezimgfmt=rs:300x300/rscb6/ngcb6/notWebP" alt="" />
            <div className='window__btns-row'>
              <input type="text" placeholder='Например: Джордан Беллфорд' className='window__input' />
              <button type='button' className='window__btn'>Отправить</button>
            </div>
          </div>
      }
    </div>
  );
};

export default Question;