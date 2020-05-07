import React from "react";
import Game from "./Game";
import Axios from "axios";
import "./GameList.css";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      bestGames: false,
    };
  }

  getList = async () => {
    const list = await Axios.get(
      "https://wild-games.herokuapp.com/api/v1"
    ).catch((e) => {
      return `Nous avons rencontrer une erreur lors du chargement des jeux ! -> \n ${e}`;
    });
    this.setState({ list: list.statusText === "OK" ? list.data : list });
  };

  handleBests = () => {
    this.setState({ bestGames: !this.state.bestGames });
  };

  componentDidMount() {
    this.getList();
  }

  render() {
    const { list, bestGames } = this.state;

    return (
      <>
        <h2>See our Amazing Game List !</h2>
        <button onClick={this.handleBests}>
          {bestGames ? "All Games" : "Best Games"}
        </button>
        <section className="gamelist">
          {typeof list === "string" ? (
            <div>{list}</div>
          ) : list !== null ? (
            !bestGames ? (
              list.map((game) => <Game {...game} key={game.id} />)
            ) : (
              list
                .filter((item) => item.rating >= 4.5)
                .map((game) => <Game {...game} key={game.id} />)
            )
          ) : (
            <h2>Loading ...</h2>
          )}
        </section>
      </>
    );
  }
}

export default GameList;
