import React from "react";

const Game = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <span>{props.rating} / 5</span>
      <img src={props.background_image} alt={props.name} />
    </div>
  );
};

export default Game;
