import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class UnconnectedDeck extends Component {
  constructor(props) {
    super(props);
  }

  handleDeck = () => {
    this.props.dispatch({ type: 'SELECT_DECK', currentDeck: this.props });
  };

  render() {
    return (
      <div className="deckCard">
        <div className="title">{this.props.title}</div>
        <div className="playContainer">
          <Link to={`/deck/${this.props.id}`}>
            <div onClick={this.handleDeck} className="playBtn">
              Play
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null)(UnconnectedDeck);
