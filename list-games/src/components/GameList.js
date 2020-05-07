import React from "react";
import Game from "./Game";
import Axios from "axios";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
    };
  }

  getList = async () => {
    const list = await Axios.get(
      "https://wild-games.herokuapp.com/api/v2"
    ).catch((e) => {
      return `Nous avons rencontrer une erreur lors du chargement des jeux ! -> ${e}`;
    });
    this.setState({ list: list.statusText === "OK" ? list.data : list });
  };

  componentDidMount() {
    this.getList();
  }

  render() {
    console.log(this.state.list);
    return (
      <>
        <h2>Hello from Gamelist !</h2>
        <Game />
      </>
    );
  }
}

export default GameList;
