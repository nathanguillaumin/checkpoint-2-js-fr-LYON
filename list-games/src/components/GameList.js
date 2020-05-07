import React from 'react'
import Game from './Game'

const GameList = (props) => {
  return (
    <div className='gameList'>
      {props.gameList.map((game, id) =>
        <Game 
          key={id} 
          name={game.name} 
          img={game.img} 
          rating={game.rating} 
          deleteGame={this.deleteGame} />)}
    </div>
  )
}

export default GameList
