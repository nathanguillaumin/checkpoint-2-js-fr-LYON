import React, { useState } from 'react';
import './Game.css';
import { Link } from "react-router-dom";

const Game = ({ gameList }) => {

  const [customGameList, setCustomGameList] = useState(gameList);
  const [textButton, setTextButton] = useState(true)

  return (
    <>
      <p>Voici la liste des jeux disponibles</p>
      <button
        onClick={() => {
          if (textButton) {
            setCustomGameList(customGameList.filter(game => game.rating > 4.5))
            setTextButton(!textButton)
          } else {
            setCustomGameList(gameList)
            setTextButton(!textButton)
          }
        }}
      >{textButton ? 'Best Games' : 'All Games'}</button>
      <div className='game-container'>
        {customGameList.map(game => {
          return (
            <div className='game' key={game.name}>
              <div className='game-presentation'>
                <h1>{game.name}</h1>
                <p>Note : {game.rating}</p>
                <Link to={`/jeu/screenshots/${game.id}`}>Voir les screenshots du jeu</Link>
                <button
                  onClick={() => {
                    const id = customGameList.indexOf(game)
                    setCustomGameList(customGameList.filter((game, index) => index !== id))
                  }}
                >Supprimer ce jeu de la liste</button>
              </div>
              <img src={game.background_image} alt={game.name} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Game;
