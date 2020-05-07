import React from 'react';
import axios from 'axios';
import Game from './Game';

class GameList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      gameList: [],
      gameListIsLoading: true
    }
    this.getGames=this.getGames.bind(this);
  }

  componentDidMount() {
    this.getGames();
  }

  getGames = () => {
    axios
      .get('https://wild-games.herokuapp.com/api/v1')
      .then(response => {
        console.log(response.data)
        this.setState({gameList: response.data, gameListIsLoading: false})
      })
  }

  render () {
    return (
      <div>
        {this.state.gameListIsLoading ? <p>chargement des données</p> : <Game gameList={this.state.gameList} />}
      </div>
      
    )
  }
}

export default GameList
