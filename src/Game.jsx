import React, { Component } from 'react';
import { initialDecks } from './data';
import { connect } from 'react-redux';
import Results from './Results';

class UnconnectedGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      answers: [],
    };
  }

  handleAnswer = answer => {
    const realAnswer = this.props.deck.cards[this.state.currentQuestion]
      .choices[this.props.deck.cards[this.state.currentQuestion].answer];
    const isCorrect = answer === realAnswer ? true : false;

    this.setState({
      currentQuestion: this.state.currentQuestion + 1,
      answers: [
        ...this.state.answers,
        {
          question: this.props.deck.cards[this.state.currentQuestion].question,
          realAnswer: realAnswer,
          userAnswer: answer,
          isCorrect: isCorrect,
        },
      ],
    });
  };

  quizzSummary = answers => {
    <Results answers={answers} />;
  };

  render() {
    console.log(this.state);
    if (this.props.deck.cards[this.state.currentQuestion] == null) {
      return <Results answers={this.state.answers} />;
    } else {
      return (
        <div className="box">
          <div className="formContainer">
            <div className="questionContainer">
              {this.props.deck.cards[this.state.currentQuestion].question}
            </div>
            <div className="answersContainer">
              {this.props.deck.cards[this.state.currentQuestion].choices.map(
                choice => (
                  <div
                    onClick={() => {
                      this.handleAnswer(choice);
                    }}
                    id={choice}
                    className="answerChoice"
                  >
                    {choice}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    currentDeck: initialDecks.filter(deck => deck.id === state.selectedDeckId),
  };
};

const Game = connect(mapStateToProps)(UnconnectedGame);
export default Game;
