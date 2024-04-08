import cupSvg from './../assets/cup.svg';
import quizSvg from './../assets/quiz.svg'
import { store } from '../store/store';
import { setGameType } from '../store/reducers/ActionCreators';

function Type() {
  return (
    <div className='window'>
      <h1 className='window__title'>Выберите режим</h1>
      <div className='window__btns-row'>
        <button type='button' className='window__answer-btn window__answer-btn--green' onClick={() => store.dispatch(setGameType("quiz"))}><img src={quizSvg} alt="" className='window__icon' /> Квиз</button>
        <button type='button' className='window__answer-btn window__answer-btn--red' onClick={() => store.dispatch(setGameType("test"))}><img src={cupSvg} alt="" className='window__icon'/> Тест</button>
      </div>
      <div className='window__descrs'>
        <p className='window__descr'><span style={{ color: "green" }}>Квиз</span> нацелен на изучения английского языка в развлекательной форме, в то время как <span style={{ color: "red" }}>Тест</span> создан для проверки своих знаний на практике.</p>
        <p className='window__descr'>Свои результаты тестов Вы можете посмотреть в Профиле.</p>
      </div>
    </div>
  );
};

export default Type;