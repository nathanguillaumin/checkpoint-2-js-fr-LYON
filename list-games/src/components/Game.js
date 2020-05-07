import React from 'react'

 const Game = (props) => {
  
  return (
    <div>
      <button onClick = {props.delete} >Delet</button>
      <button onClick = {props.filter} >Filter</button>
      {props.info}
    </div>

  )
}

export default Game