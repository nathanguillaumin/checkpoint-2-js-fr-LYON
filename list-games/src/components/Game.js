import React from 'react';
import './Game.css';

const Game = ({ gameList }) => {

  console.log(gameList)

  return (
    <>
      <p>Voici la liste des jeux disponibles</p>
      <div className='game-container'>
        {gameList.map(game => {
          return (
            <div className='game'>
              <div className='game-presentation'>
                <h1>{game.name}</h1>
                <p>Note : {game.rating}</p>
              </div>
              <img src={game.background_image} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Game;
