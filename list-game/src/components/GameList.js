import React from 'react';
import axios from 'axios';
import Game from './Game';

class GameList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      allGameList: [],
      highRateGames: [],
      allGames: true
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

  handleDeleteGame (gameId) {
    const temporaryTable = this.state.allGameList;
    const indexOfDelElement = temporaryTable.findIndex((game) => game.id === gameId);
    temporaryTable.splice(indexOfDelElement,1);
    this.setState({ allGameList: temporaryTable });
  }

  handleRatedGames () {
    const highRateGames = this.state.allGameList.filter(game => game.rating > 4.5);
    this.setState({ highRateGames, allGames: !this.state.allGames });
  }

   render () {
     const userList = (this.state.allGames ? this.state.allGameList : this.state.highRateGames)
       const list = userList.map(game =>
      <>
        <Game game={game} />
        {this.state.allGames && <button onClick={() => this.handleDeleteGame(game.id)}>Delete {game.name}</button>}
      </>
      );
     
    return (
      <div>
        <h1>Welcome to the game list of a non-gamer guy!</h1>
        <button onClick={() => this.handleRatedGames()}>{this.state.allGames ? 'All games' : 'Best games'}</button>
        {list}
      </div>
    );
  }
}

export default GameList;
