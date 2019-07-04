import React, { Component } from 'react';
import { initialDecks } from './data';

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="box">
        <div className="formContainer">
          <div className="questionContainer">Results</div>
          <div className="results">
            <h2 className="resultSlogan">Kind of gets it 😐</h2>
            {this.props.answers.map(question => {
              return (
                <div>
                  <h3>{question.question}</h3>
                  <p>Answer: {question.realAnswer}</p>
                  <p>Your answer: {question.userAnswer}</p>
                </div>
              );
            })}
          </div>
          <div onClick={this.playAgain} className="playBtn">
            Play again
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
