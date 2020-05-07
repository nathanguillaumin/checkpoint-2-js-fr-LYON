import React from 'react';
import Game from './Game';

class GameList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='game-list'>
        {this.props.games.map(game => (
          <Game name={game.name} img={game.background_image} rate={game.rating} key={game.id} />
        ))}
      </div>
    );
  }
}

export default GameList;
