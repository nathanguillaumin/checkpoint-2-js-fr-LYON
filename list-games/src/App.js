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

  render() {
    return (
      <div className="App">
        <GameList games={this.state.games} />
      </div>
    );
  }
}
