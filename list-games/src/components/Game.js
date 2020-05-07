import React from 'react'

function Game (props) {
  const { name, backgroundImage, rating } = props.game
  return (
    <div className='gameCard'>
      <h3>{name}</h3>
      <img className='gameImg' src={backgroundImage} alt={name} />
      <p>{rating}</p>
      <button onClick={() => props.handleDelete(name)}>Remove</button>
    </div>
  )
}

export default Game
