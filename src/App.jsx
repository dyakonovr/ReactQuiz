import './index.scss';
import Game from './components/Game';
import Result from './components/Result';
import { useSelector } from 'react-redux';
import Type from './components/Type';

const App = () => {
  const { quizIsDone, gameType } = useSelector(state => state.quizReducer);

  return (
    <div className="App">
      {gameType === null
        ? // Если тип игры не выбран
        <Type />
        : // Иначе
        !quizIsDone ? <Game /> : <Result />
      }
    </div>
  );
}

export default App;
