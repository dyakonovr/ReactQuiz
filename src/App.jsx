import './index.scss';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { useSelector } from 'react-redux';

const App = () => {
  const { quizIsDone } = useSelector(state => state.quizReducer);

  return (
    <div className="App">
      {!quizIsDone && <Quiz />}
      {quizIsDone && <Result />}
    </div>
  );
}

export default App;
