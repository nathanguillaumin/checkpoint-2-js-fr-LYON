import React, { Component } from 'react';
import Axios from 'axios';
import Game from './Game'

export class GameList extends Component {
  state = {
    gameList: [],
    showBestGames:false
  }

  componentDidMount() {
    this.getGamesFromAPI()
  }

  // getGamesFromAPI = async () => {
  //   const gameList = await Axios.get(
  //     `https://wild-games.herokuapp.com/api/v1`
  //   ).then((response) => response.data)
  //   this.setState({ gameList });
  // };
  getGamesFromAPI = async () => {
    await Axios.get(`https://wild-games.herokuapp.com/api/v1`)
    .then((response) => response.data)
    .then(data => {
      const gameList = data.map(game => {
        return { ...game, show: true }
      });
      this.setState({ gameList });
    })
  };

  handleDelete = (id) => {
    const gameList = this.state.gameList
    .map(game => {
      if (id === game.id) {
        return {...game, show : false}
      }
      else{
        return game
      }
    })
    this.setState({ gameList })
  }

  handleShowBestGames = () => {
    this.setState({ showBestGames: !this.state.showBestGames })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleShowBestGames}>{this.state.showBestGames ? 'All games' : 'Best Games'}</button>
        {this.state.gameList
        .filter(game => !this.state.showBestGames || game.rating >= 4.5 )
        .map(game => game.show && <Game infoGame={game} onDelete={this.handleDelete} />)}
      </div>
    )
  }
}

export default GameList
