import React, { useState } from 'react';
import './Game.css';

const Game = ({ gameList }) => {

  const [customGameList, setCustomGameList] = useState(gameList);

  return (
    <>
      <p>Voici la liste des jeux disponibles</p>
      <div className='game-container'>
        {customGameList.map(game => {
          return (
            <div className='game' key={game.name}>
              <div className='game-presentation'>
                <h1>{game.name}</h1>
                <p>Note : {game.rating}</p>
                <button 
                  onClick={() => {
                    const id = customGameList.indexOf(game)
                    setCustomGameList(customGameList.filter( (game, index) =>  index !== id))
                  }}
                >Supprimer ce jeu de la liste</button>
              </div>
              <img src={game.background_image} alt={game.name}/>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Game;
