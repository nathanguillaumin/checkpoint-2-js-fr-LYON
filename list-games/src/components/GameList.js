import React from 'react'
import Game from './Game'

const GameList = (props) => {
  const gameList = props.gameList
  return (
    <div className='gameList'>
      {gameList.map(game => {
        return (
          <Game key={game.name} game={game} backgroundImage={game.background_image} rating={game.rating} onDelete={props.handleDelete} />
        )
      }
      )}
    </div>
  )
}

export default GameList
