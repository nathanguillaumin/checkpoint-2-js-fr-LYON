import React from "react";
import "./Game.css";
import { Link } from "react-router-dom";

const Game = (props) => {
  return (
    <section className="game">
      <div>
        <Link className="link" to={`/${props.id}/${props.slug}`}>
          <h3>{props.name}</h3>
        </Link>
        <span>{props.rating} / 5</span>
        <button id={props.id} onClick={props.remove}>
          Delete
        </button>
      </div>
      <Link className="link" to={`/${props.id}/${props.slug}`}>
        <img src={props.background_image} alt={props.name} />
      </Link>
    </section>
  );
};

export default Game;
