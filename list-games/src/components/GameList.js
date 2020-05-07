import React from "react";
import Game from "./Game";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h2>Hello from Gamelist !</h2>
        <Game />
      </>
    );
  }
}

export default GameList;
