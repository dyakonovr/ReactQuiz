// import { Component } from 'react';
import { useSelector } from 'react-redux';
import { store } from '../store/store';
import { nextQuestion } from './../store/reducers/ActionCreators';

const Quiz = () => {
  const { questions, counter } = useSelector(state => state.quizReducer);

  const questionsKeys = Object.keys(questions);
  const currentQuestion = questionsKeys[counter];
  const answersObj = questions[currentQuestion];
  const allAnswers = Object.keys(answersObj);

  // Функции
  function answerClickHandle(isCorrect) {
    store.dispatch(nextQuestion(isCorrect))
  }

  function createAnswers(answersKeys) {
    return answersKeys.map((item, index) => {
      return <li className="window__answer" key={index} onClick={() => answerClickHandle(answersObj[item])} data-correct={answersObj[item]}>{item}</li>;
    });;
  }

  function shuffleList(payload) {
    return payload.sort(() => Math.round(Math.random() * 100) - 50);
  }
  // Функции END

  const answersKeys = shuffleList(allAnswers);

  return (
    <div className='window'>
      <span className="window__counter">Вопрос №{counter + 1}</span>
      <strong className='window__title'>{questionsKeys[counter]}</strong>
      <ul className="window__list">
        {createAnswers(answersKeys)}
      </ul>
    </div>
  );
}

export default Quiz;