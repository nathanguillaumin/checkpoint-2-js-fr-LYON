import React, { Component } from "react";
import GameList from "./components/GameList";
import axios from "axios";

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      games: [],
      filterGames : false,
      buttonText: 'Best games',
    };
  }

  componentDidMount() {
    this.getGames();
  }

  getGames = () => {
    axios
    .get('https://wild-games.herokuapp.com/api/v1')
    .then((response) => {
      this.setState({ games: response.data });
    }, (error) => {
      console.log(error);
    });
  };

  delGame = (name) =>{
    this.setState({games: [...this.state.games.filter(game => game.name !== name)]});
  }

  bestGamesOnClick = () => {
    let games = this.state.games.slice();
    if (this.state.filterGames === false) {
      games = games.filter(
        game => game.rating >= 4.5
      );
      this.setState({ games });
      this.setState({ filterGames: true });
      this.setState({ buttonText: 'Best games' });
    } else {
      this.setState({ quoteList: this.quoteListRef });
      this.setState({ filterGames: false });
      this.setState({ buttonText: 'All games' });
    }
  }


  render() {
    return (
      <div>
        <button onClick={this.bestGamesOnClick}>
            {this.state.buttonText}
        </button>
        {this.state.games.map((game, index) => (
          <div key={index}>
            <GameList games={this.state.games} delGame={this.delGame}/>
          </div>
        ))}
      </div>
    );
  }
}

