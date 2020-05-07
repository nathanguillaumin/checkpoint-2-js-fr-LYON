import React from 'react';
import './Game.css';

const Game = (props) => {
  const game = props.game;
  return (
    <div className='game'>
      <h2>{game.name}</h2>
      <p>Rating: {game.rating}/100</p>
      <img className='image' src={game.background_image} alt={game.name} />
    </div>
  );
};

export default Game;
