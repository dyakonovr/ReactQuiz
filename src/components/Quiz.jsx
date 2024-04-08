import { useSelector } from 'react-redux';

import { nextQuestion, setShuffledList } from '../store/reducers/ActionCreators';
import { store } from '../store/store';
import Question from './Question';

function Quiz() {
  const { questions, counter, shuffledList } = useSelector(store => store.quizReducer);

  // Функции
  function answerClickHandle(isCorrect) {
    store.dispatch(nextQuestion(isCorrect));
  }

  function inputAnswerHandle(rightAnswer) {
    console.log(rightAnswer);
    const input = document.querySelector('#input');
    const userAnswer = input.value;

    input.value = '';
    if (userAnswer.replace(/\s+/g, ' ').trim() === rightAnswer) answerClickHandle(1);
    else answerClickHandle(0);
  }

  function createAnswers(answersObj, answersKeys, questionObj, questionType) {
    if (questionType !== "guess") {
      return answersKeys.map((item, index) => {
        return <li className="window__answer window__answer--grid" key={index}
          onClick={() => answerClickHandle(answersObj[item])}
          data-correct={answersObj[item]}>{item}</li>;
      });
    } else {
      return (
        <>
          {questionObj.photoUrl !== null ? <div className='window__img-wrapper'><img className='window__img' src={questionObj.photoUrl} alt={questionObj.descr} /></div> : null}
          {questionObj.descr !== null ? <p className='window__descr'>{questionObj.descr}</p> : null}
          <div className='window__btns-row'>
            <input type="text" placeholder={`Например: ${questionObj.placeholder}`} data-answer={questionObj.rightAnswer} className='window__input' id='input' onKeyDown={(e) => {
              if (e.key === 'Enter') inputAnswerHandle(questionObj.rightAnswer)
            }}/>
            <button type='button' onClick={(e) => inputAnswerHandle(e.target.dataset.answer)}
              className='window__btn window__btn--in-input' data-answer={questionObj.rightAnswer}>Отправить</button>
          </div>
        </>
      );
    }
  }

  function shuffleList(payload) {
    return payload.sort(() => Math.round(Math.random() * 100) - 50);
  }
  // Функции END

  // Формирование вопросов и ответов
  const questionsList = questions.quiz;
  const questionsQuantity = 15;
  let questionsKeys;

  if (shuffledList === null) {
    questionsKeys = shuffleList(Object.keys(questionsList)).slice(0, 15);
    store.dispatch(setShuffledList(questionsKeys));
  } else {
    questionsKeys = shuffledList;
  }

  const currentQuestion = questionsKeys[counter];
  const questionObj = questionsList[currentQuestion];
  const questionType = questionObj.type;

  // let answersObj, allAnswers, answersKeys;
  const answersObj = questionObj.answers || {};
  const allAnswers = Object.keys(answersObj) || {};
  const answersKeys = questionType === "default" ? shuffleList(allAnswers) : allAnswers;

  return (<Question isGuessQuestion={questionType === 'guess'} answers={createAnswers(answersObj, answersKeys, questionObj, questionType)} isQuizQuestion={true} questionsQuantity={questionsQuantity}
    title={questionsKeys[counter]} counter={counter} />);
};

export default Quiz;