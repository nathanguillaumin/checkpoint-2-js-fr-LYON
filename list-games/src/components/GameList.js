import React from 'react';
import Game from './Game';

class GameList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <Game />
    );
  }
}

export default GameList;
