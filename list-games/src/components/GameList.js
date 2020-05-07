import React, { Component } from 'react';
import Axios from 'axios';
import Game from './Game'

export class GameList extends Component {
  state = {
    gameList:[]
  }

  componentDidMount(){
    this.getGamesFromAPI()
  }


  getGamesFromAPI = async () => {
    const gameList = await Axios.get(
      `https://wild-games.herokuapp.com/api/v1`
    ).then((response) => response.data);
    this.setState({ gameList });
  };
  

  render() {
    return (
      <div>
        {this.state.gameList.map(game => <Game />)}
      </div>
    )
  }
}

export default GameList
