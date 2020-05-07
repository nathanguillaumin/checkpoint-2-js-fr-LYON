import React from 'react'
import './game.css'

function Game ({data, remove, id}) {
  return (
    <>
      <div className="eachGame">
        <h1>
          {data.name}
        </h1>
      
        <img src={data.background_image} alt="game img" />          
        <p>Rating : {data.rating}</p>
        <input className="deleteButton" type="button" value='X' onClick={()=>remove(id)}/>
    </div>
    </>
  )
}





export default Game;