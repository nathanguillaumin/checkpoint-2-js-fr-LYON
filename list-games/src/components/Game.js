import React from 'react';
import { Link } from 'react-router-dom';

function Game (props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <img src={props.background_image} alt={props.name} />
      <p>{props.rating}</p>
      <Link to={`/jeu/screenshots/${props.id}`}>
      <button>View more</button>
      </Link>
      <button onClick={() => props.handleClick(props.id)}>Supprimer</button>
    </div>
  )
}

export default Game;
