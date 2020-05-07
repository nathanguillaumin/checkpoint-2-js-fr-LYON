import React, { Component } from 'react';
import Game from './Game';

function GameList (props) {
  const games = props.games;
  return (
    <div style={gameListStyle}>
      {games.map((game) =>
        <Game delGame={props.delGame} key={game.id} {...game} />)}
    </div>
  );
}

const gameListStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
};

export default GameList;
