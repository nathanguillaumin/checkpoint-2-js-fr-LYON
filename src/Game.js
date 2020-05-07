import React from 'react'
import './App.css'

function Game ({ id, name, rating, background_image, deleteCard }) {
  return (
    <div>
      <div className='img-hov ThumbNail'>
        <img src={background_image} alt={name}/>
        <figcaption>
          <h4>Name: {name}</h4>
          <br/>
          <h4>Rating: {rating}</h4>
        </figcaption>
      </div>
      <button className='button' onClick={() => deleteCard(id)}>Delete a Game</button>
    </div>
  )
}

export default Game