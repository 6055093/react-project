import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import './main.css';
import { initialDecks } from './data.js';
import Game from './Game.jsx';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import NewDeck from './NewDeck';
import { connect } from 'react-redux';

const renderHome = decks => {
  return <Home decks={decks} />;
};

const renderGame = (routerData, decks) => {
  console.log(decks);
  const deckId = Number(routerData.match.params.deckId);
  const deck = decks.find(deck => deck.id === deckId);
  return <Game deck={deck} />;
};

const renderCreateDeck = () => {
  return <NewDeck />;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: this.props.decks,
    };
    console.log('these are the decks', this.state.decks);
  }

  renderHome = () => {
    return renderHome(this.state.decks);
  };

  renderGame = routerData => {
    return renderGame(routerData, this.state.decks);
  };

  createDeck = () => {
    return renderCreateDeck();
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar decks={this.state.decks} />
          <Route exact={true} path="/" render={this.renderHome} />
          <Route exact={true} path="/create-deck" render={this.createDeck} />
          <Route exact={true} path="/deck/:deckId" render={this.renderGame} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = st => {
  return {
    decks: st.decks,
  };
};

export default connect(mapStateToProps)(App);
