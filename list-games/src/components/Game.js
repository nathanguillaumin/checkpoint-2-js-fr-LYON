import React from 'react'
import './game.css'
import { Link } from "react-router-dom";

function Game({ infoGame , onDelete}) {
  return (
    <div className="game">
      <h2>{infoGame.name}</h2>
      <img src={infoGame.background_image} alt={infoGame.name}/>
      <p>{infoGame.rating}/5</p>
      <button onClick={() => onDelete(infoGame.id)}>X</button>
      <Link to={`/jeu/screenshots/${infoGame.id}`}>More Details</Link>
    </div>
  )
}

export default Game
