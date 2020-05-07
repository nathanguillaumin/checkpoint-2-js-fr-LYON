import React from 'react';
import Game from './Game'
import axios from 'axios';
import '../GameList.css'



class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamelist: [],
      allGames: true,
    };
  }

  componentDidMount() {
    this.getGamesFromApi();
  }

  getGamesFromApi = () => {
    const url = 'https://wild-games.herokuapp.com/api/v1';
    axios.get(url)
      .then(response => response.data)
      .then(data => {
        this.setState({ gamelist: data })
      })
  }

  deleteGame = (e, name) => {
    let gamelist = this.state.gamelist.slice();

    gamelist.map(game => {
      if (game.name === name) {
        const indexOfGame = gamelist.indexOf(game)
        console.log(indexOfGame);
        gamelist.splice(gamelist.indexOf(game), 1)
      }
    })
    this.setState({ gamelist })
  }

  handleClickBestGames = () => {
    const gamelist = this.state.gamelist.slice()
    this.setState({ allGames: !this.state.allGames })

  }

  render() {
    const gamelist = this.state.gamelist;
    const allGames = this.state.allGames;
    return (
      <div className='gamelist'>
        <button onClick={this.handleClickBestGames}>{allGames ? 'Best Games' : 'All Games !'} </button>
        {allGames ?
          (gamelist.map(game =>
            <Game key={game.id} id={game.id} background={game.background_image} name={game.name} slug={game.slug} released={game.released} rating={game.rating} deleteGame={this.deleteGame} image={this.image} />)) :
          (gamelist.filter(game => game.rating > 4.5).map(game =>
            <Game key={game.id} background={game.background_image} name={game.name} slug={game.slug} released={game.released} rating={game.rating} deleteGame={this.deleteGame} image={this.image} id={game.id}  />))
        }
      </div>
    );
  };
}

export default GameList;