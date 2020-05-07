import React from 'react';

function Game (props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <img src={props.background_image} alt={props.name} />
      <p>{props.rating}</p>
      <button onClick={props.handleClick}>Supprimer</button>
    </div>
  )
}

export default Game;
