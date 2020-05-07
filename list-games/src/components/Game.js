import React from "react";
import "./Game.css";

const Game = (props) => {
  return (
    <section className="game">
      <div>
        <h3>{props.name}</h3>
        <span>{props.rating} / 5</span>
        <button id={props.id} onClick={props.remove}>
          Delete
        </button>
      </div>
      <img src={props.background_image} alt={props.name} />
    </section>
  );
};

export default Game;
