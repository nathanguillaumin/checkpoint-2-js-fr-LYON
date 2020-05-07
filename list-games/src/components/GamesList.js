import React from 'react';
import { Link } from 'react-router-dom';
import game from './game.json';

function GamesList() {
  return (
    <div className="GamesList">
      <h3>List of Games</h3>

      {game.map(game => (
        <p key={game.id} className="Game">

          <Link to={`/game/${game.id}`}>{game.name}</Link>

        </p>
      ))}

    </div>
  );
}


export default  GamesList;