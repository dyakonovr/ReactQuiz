import { useSelector } from 'react-redux';
import { store } from '../store/store';
import { nextQuestion, setDifficulty, setExplanationIsShowed, setUserData, setUsername } from './../store/reducers/ActionCreators';
import Explanation from './Explanation';
import Question from './Question';
import Switch from './UI/Switch';
import { useEffect } from 'react';

const Quiz = () => {
  const { questions, counter, currentDifficulty, questionsQuantityByExplanation, explanationIsNeeded, explanationIsShowed } = useSelector(state => state.quizReducer);

  useEffect(() => {
    // Получаю никнейм пользователя
    const username = document.querySelector("#username").innerHTML;
    store.dispatch(setUsername(username));

    // Получаю ID пользователя, прошлые результаты и токен
    store.dispatch(setUserData(username));
  }, []);

  // Функции
  function answerClickHandle(isCorrect) {
    console.log(explanationIsNeeded, isCorrect);
    if (!explanationIsNeeded) store.dispatch(nextQuestion(isCorrect));
    else {
      if (!explanationIsShowed) store.dispatch(setExplanationIsShowed(isCorrect));
    }
  }

  function createAnswers(answersObj, answersKeys) {
    return answersKeys.map((item, index) => {
      return <li className="window__answer" key={index} onClick={() => answerClickHandle(answersObj[item])} data-correct={answersObj[item]}>{item}</li>;
    });
  }

  function shuffleList(payload) {
    return payload.sort(() => Math.round(Math.random() * 100) - 50);
  }

  function handleDifficultyClick(value) {
    store.dispatch(setDifficulty(value));
  }
  // Функции END


  if (currentDifficulty) {
    const currentQuestionsList = questions[currentDifficulty];
    const questionsKeys = Object.keys(currentQuestionsList);
    const currentQuestion = questionsKeys[counter];
    const answersObj = currentQuestionsList[currentQuestion].answers;
    const allAnswers = Object.keys(answersObj);
    const answersKeys = shuffleList(allAnswers);
    const questionsQuantity = questionsQuantityByExplanation[currentDifficulty];

    if (!explanationIsNeeded) { // Если подсказки не включены
      return (<Question answers={createAnswers(answersObj, answersKeys)} questionsQuantity={questionsQuantity} title={questionsKeys[counter]} counter={counter} />);
    } else {
      if (!explanationIsShowed) return (<Question answers={createAnswers(answersObj, answersKeys)} questionsQuantity={questionsQuantity} title={questionsKeys[counter]} counter={counter} />)
      else {
        const rightAnswer = Object.keys(answersObj).find(key => answersObj[key] === 1);
        const currentExplanation = currentQuestionsList[currentQuestion].explanation;
        return <Explanation currentQuestion={currentQuestion} rightAnswer={rightAnswer} currentExplanation={currentExplanation} />;
      }
    }
  }

  else {
    return (
      <div className='window'>
        <strong className='window__title'>Выберите сложность</strong>
        <ul className="window__list" onClick={(e) => handleDifficultyClick(e.target.dataset.value)}>
          <li className="window__answer" data-value="easy">Легкая <span className='window__small'>{questionsQuantityByExplanation.easy} вопросов</span></li>
          <li className="window__answer" data-value="medium">Средняя <span className='window__small'>{questionsQuantityByExplanation.medium} вопросов</span></li>
          <li className="window__answer" data-value="hard">Сложная <span className='window__small'>{questionsQuantityByExplanation.hard} вопросов</span></li>
        </ul>
        <Switch />
      </div>
    );

  }
}

export default Quiz;