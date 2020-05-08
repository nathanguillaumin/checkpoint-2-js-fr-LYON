import React, { Component } from 'react';
import GameList from '../components/GameList';
import Header from '../components/Header';
import Button from 'react-bootstrap/Button';

export class Home extends Component {
  render () {
    return (
      <div>
        <Button variant="warning" onClick={this.props.handleClick}>{this.props.bestGames ? 'All games' : 'Best games'}</Button>
        <GameList delGame={this.props.delGame} games={this.props.bestGames ? this.props.filteredGames : this.props.games} />
      </div>
    );
  }
}

export default Home;
