import React from 'react';
import Game from './Game';

function GameList (props) {
  const games = props.games;
  return (
    <div>
      {games.map((game) =>
        <Game key={game.name} {...game} delGame={props.delGame} />)}
    </div>
  );
}

export default GameList;