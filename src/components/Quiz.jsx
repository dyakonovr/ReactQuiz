import { Component } from 'react';

class Quiz extends Component {
  render() {
    const questionsObj = this.props.questions;
    const questionsKeys = Object.keys(questionsObj);
    const currentQuestion = questionsKeys[this.props.counter];
    const answersObj = questionsObj[currentQuestion];
    const answersKeys = this.props.shuffleList(Object.keys(answersObj));

    const items = answersKeys.map((item, index) => {
      return <li className="window__answer" key={index} onClick={this.props.nextQuestion} data-correct={answersObj[item]}>{item}</li>;
    });

    return (
      <div className='window'>
        <span className="window__counter">Вопрос №{this.props.counter + 1}</span>
        <strong className='window__title'>{questionsKeys[this.props.counter]}</strong>
        <ul className="window__list">
          {items}
        </ul>
      </div>
    );
  }
};

export default Quiz;