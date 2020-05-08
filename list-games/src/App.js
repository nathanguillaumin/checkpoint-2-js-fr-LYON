import React, { Component } from "react";
import GameList from "./components/GameList";
import axios from "axios";

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      games: []
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
    // this.setState({games: [...this.state.games.filter(game => game.name !== name)]});
    console.log(name)
  }

  render() {
    return (
      <div className="App">
        <GameList games={this.state.games} delGame={this.delGame}/>
      </div>
    );
  }
}
