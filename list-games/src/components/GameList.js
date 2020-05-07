import React from 'react';
import Game from './Game';

function GameList ({game, handleClick}) {
    return (
      <div>
        {console.log(game)}{
        game.map(g => <Game key={g.id} {...g} {...handleClick} />)
        }
      </div>
    );
  }

export default GameList;
