import './index.scss';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      rightAnswers: 0,
      questions: {
        "Какой-то первый вопрос?": { "Какой-то очень-очень-очень-ОЧЕНЬ длинный ответ для нормальной реализации проекта React JSX Redux Backend": 1, "Второй ответ": 0, "Третий ответ": 0 },
        "Какой-то второй вопрос?": { "Другой ответ": 0, "Lorem ru 15": 1, "Четыре)": 0 },
        "Какой-то третий вопрос?": { "Aaaaa": 1, "Bbbbb": 0, "E200 2022 года": 0 }
      },
      quizIsDone: false,
      quantity: function () {
        return Object.keys(this.questions).length
      }
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.rightAnswer = this.rightAnswer.bind(this);
    this.shuffleList = this.shuffleList.bind(this);
    this.resetQuiz = this.resetQuiz.bind(this);
  }

  nextQuestion(e) {
    this.setState((state) => {
      return { counter: state.counter + 1 }
    });

    if (this.state.counter + 1 === this.state.quantity()) {
      this.setState({ quizIsDone: true });
    }

    if (e.target.dataset.correct === '1') {
      this.setState((state) => {
        return { rightAnswers: state.rightAnswers + 1 }
      });
    }
  }

  rightAnswer() {
    this.setState((state) => {
      return { rightAnswers: state.rightAnswers + 1 }
    });
  }

  shuffleList(arr) {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
  }

  resetQuiz() {
    this.setState({
      quizIsDone: false, counter: 0, rightAnswers: 0
    });
  }

  render() {
    return (
      <div className="App">
        {!this.state.quizIsDone && <Quiz counter={this.state.counter} questions={this.state.questions} nextQuestion={this.nextQuestion} rightAnswer={this.rightAnswer} shuffleList={this.shuffleList} />}
        {this.state.quizIsDone && <Result quantity={this.state.quantity()} rightAnswers={this.state.rightAnswers} resetQuiz={this.resetQuiz} />}
      </div>
    );
  }
}

export default App;
