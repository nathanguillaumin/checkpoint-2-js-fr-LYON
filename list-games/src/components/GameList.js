import React from 'react'
import Game from './Game'

const GameList = (props) => {
  return (
    <div className='gameList'>
      {props.gameList.map(game =>
        <Game
          key={game.id}
          id={game.id}
          name={game.name}
          img={game.img}
          rating={game.rating}
          deleteGame={props.deleteGame}
        />
      )}
    </div>
  )
}

export default GameList
