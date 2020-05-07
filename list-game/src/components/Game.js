import React from 'react';

const Game = (props) => {
  console.log(props);
  return (
    <div>
      {props.game.name}
    </div>
  );
};

export default Game;
