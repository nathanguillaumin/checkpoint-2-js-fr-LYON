import React from 'react'
import './game.css'
import { Link } from "react-router-dom";

function Game({ infoGame , onDelete}) {
  return (
    <>
      <div className="game">
        <button className='delete'onClick={() => onDelete(infoGame.id)}>X</button>
        <div className="containerCard">
          <h2>{infoGame.name}</h2>
          <img src={infoGame.background_image} alt={infoGame.name}/>
          <p>{infoGame.rating}/5</p>
          <Link to={`/jeu/screenshots/${infoGame.id}`}>screenshots</Link>
        </div>
      </div>
    </>
  )
}

export default Game
