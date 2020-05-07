import React from 'react'

function Game ({data}) {
  return (
    <>
      <div>
        <h1>
          {data.name}
        </h1>
        <img src={data.background_image} alt="game img" />          
        <p>Rating : {data.rating}</p>
    </div>
    </>
  )

}





export default Game;