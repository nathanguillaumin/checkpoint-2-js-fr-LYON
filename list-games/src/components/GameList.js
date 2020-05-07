import React from "react";
import Game from "./Game";
import "./GameList.css";

class GameList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestGames: false,
    };
  }

  handleBests = () => {
    this.setState({ bestGames: !this.state.bestGames });
  };

  render() {
    const { bestGames } = this.state;
    const { list } = this.props;

    return (
      <>
        <h2>See our Amazing Game List !</h2>
        <button className="sort" onClick={this.handleBests}>
          {bestGames ? "All Games" : "Best Games"}
        </button>
        <section className="gamelist">
          {typeof list === "string" ? (
            <div>{list}</div>
          ) : list !== null ? (
            !bestGames ? (
              list.map((game) => (
                <Game {...game} key={game.id} remove={this.props.remove} />
              ))
            ) : (
              list
                .filter((item) => item.rating >= 4.5)
                .map((game) => (
                  <Game {...game} key={game.id} remove={this.removeGame} />
                ))
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
