import React, { Component } from 'react';
import GameList from '../components/GameList';
import Header from '../components/Header';

export class Home extends Component {
  render () {
    return (
      <div>
        <button onClick={this.props.handleClick}>{this.props.bestGames ? 'All games' : 'Best games'}</button>
        <GameList delGame={this.props.delGame} games={this.props.bestGames ? this.props.filteredGames : this.props.games} />
      </div>
    );
  }
}

export default Home;
