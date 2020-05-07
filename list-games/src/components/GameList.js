import React from 'react';
import Game from './Game';

function GameList ({game}) {
    return (
      <div>
        {console.log(game)}{
        game.map(g => <Game key={g.id} {...g} />)
        }
      </div>
    );
  }

export default GameList;
