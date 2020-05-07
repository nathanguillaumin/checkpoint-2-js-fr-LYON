import React, { Component } from 'react'
import './App.css'
import GameList from './components/GameList'
import axios from 'axios'

class App extends Component {
  constructor (props) {
    super (props)
    this.state = {
      games: []
    }
  }

  componentDidMount () {
    this.getGamesFromAPI()
  }

  getGamesFromAPI = () => {
    axios.get('https://wild-games.herokuapp.com/api/v1')
      .then(res => res.data)
      .then(data => {
        const games = data.map(game => {
          return {
            id: game.id,
            name: game.name,
            img: game.background_image,
            rating: game.rating
          }
        })
        this.setState({ games: games })
      })
      .catch(error => {
        console.log(error)
      })
  }

  deleteGame = (id) => {
    this.setState({games : [...this.state.games.filter(game => game.id !== id)]})
}

  render () {
    return (
      <div className='App'>
        <GameList gameList={this.state.games} deleteGame={this.deleteGame} />
      </div>
    )
  }
}

export default App
