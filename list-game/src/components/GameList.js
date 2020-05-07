import React from 'react';
import axios from 'axios';
import Game from './Game';

class GameList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allGameList: [],
    };
  }

  getData = () => {
    const url = 'https://wild-games.herokuapp.com/api/v1'
    axios
      .get(url)
      .then(response => {
        const allGameList = response.data;
        this.setState({ allGameList });
      })
      .catch(error => {
        console.log(error);
        alert('Une erreur s\'est produite lors du chargement des données.');
      });
  }

  componentDidMount () {
    this.getData();
  }

  render () {
    const list = this.state.allGameList.map(game =>
      <Game game={game} />
      );
    return (
      <div>
      <h1>Welcome to the game list of a non-gamer guy!</h1>
      {list}
      </div>
    );
  }
}

export default GameList;
