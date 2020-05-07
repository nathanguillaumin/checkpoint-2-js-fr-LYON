import React from 'react'

function Game ({data, remove, id}) {
  return (
    <>
      <div>
        <h1>
          {data.name}
        </h1>
        <img src={data.background_image} alt="game img" />          
        <p>Rating : {data.rating}</p>
        <input type="button" value='X' onClick={()=>remove(id)}/>
    </div>
    </>
  )
}





export default Game;