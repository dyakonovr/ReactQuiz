import { useSelector } from 'react-redux';

import { nextQuestion } from '../store/reducers/ActionCreators';
import { store } from '../store/store';
import Question from './Question';

function Quiz() {
  const { questions, counter } = useSelector(store => store.quizReducer);

  // Функции
  function answerClickHandle(isCorrect) {
    store.dispatch(nextQuestion(isCorrect));
  }

  function createAnswers(answersObj, answersKeys) {
    return answersKeys.map((item, index) => {
      return <li className="window__answer window__answer--grid" key={index}
        onClick={() => answerClickHandle(answersObj[item])}
        data-correct={answersObj[item]}>{item}</li>;
    });
  }

  function shuffleList(payload) {
    return payload.sort(() => Math.round(Math.random() * 100) - 50);
  }
  // Функции END

  // Формирование вопросов и ответов
  const questionsList = questions.quiz;
  const questionsQuantity = Object.keys(questionsList).length;
  const questionsKeys = Object.keys(questionsList);

  const currentQuestion = questionsKeys[counter];
  const questionObj = questionsList[currentQuestion];
  const questionType = questionObj.type;

  let answersObj, allAnswers, answersKeys, rightAnswer;

  if (questionType !== "guess") {
    answersObj = questionObj.answers;
    allAnswers = Object.keys(answersObj);
    answersKeys = questionType === "default" ? shuffleList(allAnswers) : allAnswers;

    return (<Question answers={createAnswers(answersObj, answersKeys)} isQuizQuestion={true} questionsQuantity={questionsQuantity}
      title={questionsKeys[counter]} counter={counter} />);
  } else {
    rightAnswer = questionObj.rightAnswer;

    return (<Question isGuessQuestion={true} isQuizQuestion={true} questionsQuantity={questionsQuantity}
      title={questionsKeys[counter]} counter={counter} />);
  }
};

export default Quiz;