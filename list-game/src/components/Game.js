import React from 'react';
import './Game.css';
import { Link } from 'react-router-dom';

const Game = (props) => {
  const game = props.game;
  return (
    <div className='games'>
      <h2>{game.name}</h2>
      <p>Rating: {game.rating}/5</p>
      <img className='image' src={game.background_image} alt={game.name} />
      <div><Link to={`/${game.slug}/screenshots/${game.id}`}>Screenshots</Link>    </div>
      <button key={`${game.id}`} onClick={() => props.handleDeleteGame(game.id)}>Delete {game.name}</button>
    </div>
  );
};

export default Game;

// {this.state.allGames && <button key={`${game.id}`} onClick={() => this.handleDeleteGame(game.id)}>Delete {game.name}</button>}
// <div><Link to={`/${game.slug}/screenshots/${game.id}`}>Screenshots</Link>    </div>