import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class UnconnectedNewDeck extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      currentQuestion: 0,
      currentChoice: 0,
      newDeck: {
        title: '',
        cards: [{ question: '', choices: ['', '', ''], answer: 0 }],
      },
    };
  }

  submitForm = evt => {
    console.log('this works');
    evt.preventDefault();
    this.props.dispatch({ type: 'NEW_DECK', newDeck: this.state.newDeck });
  };

  handleUpdateTitle = e => {
    this.setState({
      ...this.state,
      newDeck: {
        title: e.target.value,
        cards: this.state.newDeck.cards,
      },
    });
  };

  handleUpdateQuestion = e => {
    this.setState({
      ...this.state,
      newDeck: {
        title: this.state.newDeck.title,
        cards: [
          {
            question: e.target.value,
            choices: [
              ...this.state.newDeck.cards[this.state.currentQuestion].choices,
            ],
            answer: this.state.newDeck.cards[this.state.currentQuestion].answer,
          },
        ],
      },
    });
  };

  handleUpdateChoices = (e, index) => {
    const { newDeck, currentQuestion } = this.state;
    const currentChoices = newDeck.cards[currentQuestion].choices;
    const newChoices = [...currentChoices];
    newChoices[index] = e.target.value;
    const newCard = { ...newDeck.cards[currentQuestion], choices: newChoices };
    const newCards = [...newDeck.cards];
    newCards[currentQuestion] = newCard;

    this.setState({
      newDeck: {
        ...newDeck,
        cards: newCards,
      },
    });
  };

  handleCorrectAnswer = (e, index) => {
    const { newDeck, currentQuestion } = this.state;
    const newCard = { ...newDeck.cards[currentQuestion], answer: index };
    const newCards = [...newDeck.cards];
    newCards[currentQuestion] = newCard;
    this.setState({
      newDeck: {
        ...newDeck,
        cards: newCards,
      },
    });
  };

  render() {
    console.log('hello', this.state);
    return (
      <div className="box">
        <div className="formContainer">
          <div className="title">Create a deck</div>
          <div className="deckTitle">
            Title
            <input
              type="text"
              onChange={this.handleUpdateTitle}
              className="deckTitleForm"
            />
          </div>
          <form
            id="createDeckForm"
            className="deckForm"
            onSubmit={this.submitForm}
          >
            Question {this.state.newDeck.cards.length - 1} <br />
            <input
              type="text"
              onChange={this.handleUpdateQuestion}
              className="formInput"
            />
            {this.state.newDeck.cards[this.state.currentQuestion].choices.map(
              (choice, index) => (
                <>
                  <br />
                  Choice {index} <br />
                  Mark as answer
                  <input
                    type="radio"
                    id={index}
                    onClick={e => this.handleCorrectAnswer(e, index)}
                    name="correctAnswer"
                    className="answerRadio"
                  />{' '}
                  <br />
                  <input
                    type="text"
                    onChange={e => this.handleUpdateChoices(e, index)}
                    className="formInput"
                  />
                </>
              )
            )}
            <br />
            <button className="addChoice">Add choice</button>
            <button className="addCard">Add Card</button>
            <button type="submit" className="submitNewDeck">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null)(UnconnectedNewDeck);
