import React, { Component } from 'react';

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reactions: ['Надо подучить!', 'Неплохо!', 'Отличнооо!'],
    }
  }

  render() {
    let reaction = '';
    let percent = Math.round(this.props.rightAnswers / this.props.quantity);

    if (percent <= 0.3) {
      reaction = this.state.reactions[0];
    } else if (0.3 < percent < 0.6) {
      reaction = this.state.reactions[1];
    } else if (percent >= 0.6) {
      reaction = this.state.reactions[2];
    }


    return (
      <div className='window window--center'>
        <strong className='window__title'>Вы ответили правильно на {this.props.rightAnswers} вопроса из {this.props.quantity}. {reaction}</strong>
        <button type='button' className='window__btn' onClick={this.props.resetQuiz}>Попробуем ещё раз?</button>
      </div>
    );
  }
};

export default Result;