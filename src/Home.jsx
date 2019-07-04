import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UnconnectedDeck from './Deck.jsx';
import { connect } from 'react-redux';

class UnconnectedHome extends Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <div className="deckSection">
          {this.props.filtered.map(deck => (
            <UnconnectedDeck title={deck.title} id={deck.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = st => {
  console.log('hello', st);
  const filtered = st.decks.filter(deck => {
    const lc = deck.title.toLowerCase();
    const filter = st.searchTerm.toLowerCase();
    return lc.includes(filter);
  });
  return { filtered: filtered };
};

export default connect(mapStateToProps)(UnconnectedHome);
