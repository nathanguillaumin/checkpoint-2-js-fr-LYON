import React from 'react'

const Game = (props) => {
  return (
    <div className='gameCard'>
      <h3>{props.name}</h3>
      <img className='gameImg' src={props.img} alt={props.name} />
      <p>Rating : {props.rating}</p>
      <button onClick={() => props.deleteGame(props.id)}>Remove</button>
    </div>
  )
}

export default Game
