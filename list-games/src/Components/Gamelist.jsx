import  React from 'react'
import axios from 'axios'
import Game from './Game'

class Gamelist extends React.Component {
  state = {
    games : []
  }


  getGame = () => {
    axios.get('https://wild-games.herokuapp.com/api/v1')
    .then(response => response.data)
    .then(data => {
      console.log(data)
      this.setState({
        games : data
      })
    })
  }

  componentDidMount = () => {
    this.getGame()
  }

  handleDelete = () => {
    const gameListAfterDelete = this.state.games
    gameListAfterDelete.splice(1)
    this.setState({games:gameListAfterDelete})
  }

  render() {
    const games = this.state.games    
    return (
      <div>
        {games.map((game) => {
        return <Game data={game} remove={this.gameListAfterDelete}/>
          
        })
      }
      </div>
    )
  }

}


export default Gamelist ;