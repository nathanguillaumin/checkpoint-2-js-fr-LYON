import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Game from './Game'
import './App.css'

function GameList () {
  const [game, setGame] = useState([])
  const [rate, setRate] = useState(false)

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://wild-games.herokuapp.com/api/v1/')
        .then(res => setGame(res.data))
    }
    fetchData()
  }, [])

  const deleteGame = id => {
    const filterGame = game.filter(game => game.id !== id)
    setGame(filterGame)
  }

  return (
    <div className="ThumbList">
      {rate ?
        <div>
          <button className='button' onClick={() => setRate(!rate)}>{'All Games'}</button>
          {game.filter(game => game.rating >= 4.5).map(game => <Game {...game} deleteGame={deleteGame}/>)}
        </div>
        :
        <div>
          <button className='button' onClick={() => setRate(!rate)}>{'Best Games'}</button>
          {game.map(game => <Game {...game} deleteCard={deleteGame}/>)}
        </div>
      }
    </div>

  )
}

export default GameList