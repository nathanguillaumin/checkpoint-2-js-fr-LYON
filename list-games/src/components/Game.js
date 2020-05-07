import React from 'react';
import './Game.css';

const Game = ({ gameList }) => {

  return (
    
    <>
      <p>Voici la liste des jeux disponibles</p>
      <div className='game-container'>
        {gameList.map(game => {
          return (
            <div className='game' key={game.name}>
              <div className='game-presentation'>
                <h1>{game.name}</h1>
                <p>Note : {game.rating}</p>
                <button
                  onClick={() => console.log(game.name)}
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
