import React from 'react';
import axios from 'axios';
import Game from './Game';

class GameList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      gameList: []
    }
  }

  componentDidMount() {
    this.getGames();
  }

  getGames = () => {
    axios
      .get('https://wild-games.herokuapp.com/api/v1')
      .then(response => this.setState({gameList: response.data}))
  }

  render () {
    return (
      <Game />
    )
  }
}

export default GameList
