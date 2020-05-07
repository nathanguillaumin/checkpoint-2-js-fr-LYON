import  React from 'react'
import axios from 'axios'
import Game from './Game'

class Gamelist extends React.Component {
  state = {
    games : [],
    filter : false
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

  handleDelete = (id) => {
    const gameListAfterDelete = this.state.games
    gameListAfterDelete.splice(id, 1)
    this.setState({games:gameListAfterDelete})
  }

  showBestGames = () => {
    this.setState ({filter : !this.state.filter})
  }

  render() {
    const games = this.state.games   
    const filter = this.state.filter 
    return (
      <div>
        <input type ="button" value={filter ? "All Games" : "Best Games"} onClick={this.showBestGames}/>
          {filter ? 
            games.filter(game => {
            return game.rating >= 4.5
            })
            .map((game, id) => {
            return <Game data={game} remove={this.handleDelete} id={id} />
            })            
            :        
            games.map((game, id) => {
            return <Game data={game} remove={this.handleDelete} id={id}/>
          
        })
        }
      </div>
    )
  }

}


export default Gamelist ;