import { useSelector } from 'react-redux';

import Quiz from './Quiz';
import Test from './Test';

function Game() {
  const { gameType } = useSelector(store => store.quizReducer);

  return (
    <>
      {gameType === "quiz" && <Quiz />}
      {gameType === "test" && <Test />}
    </>
  );
};

export default Game;