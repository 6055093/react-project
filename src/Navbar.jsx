import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  handleSearch = e => {
    this.props.dispatch({ type: 'searchQuery', searchTerm: e.target.value });
  };
  render() {
    return (
      <div className="navbar">
        <Link to={'/'}>
          <div className="logoTitle">GOT IT!</div>
        </Link>
        <input
          type="text"
          className="searchBar"
          onChange={this.handleSearch}
          placeholder="Search decks..."
        />
        <div className="navLink">
          <Link to={'/'}>Home</Link>
        </div>
        <div className="navLink">
          <Link to={'/create-deck'}>Create deck</Link>
        </div>
      </div>
    );
  }
}

export default connect(null)(Navbar);
