import React from 'react';

const Game = ({ gameList }) => {

  console.log(gameList)
    return (
      
    <p>{gameList[0].name}</p>
    )
  }

export default Game;
