import React from "react";
import "./Details.css";
import { Link } from "react-router-dom";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: null,
    };
  }

  getGameDetails = () => {
    const index = this.props.list.findIndex(
      (item) => item.id === parseInt(this.props.match.params.id)
    );
    const game = this.props.list[index];
    this.setState({ game });
    console.log(game);
  };

  componentDidMount() {
    this.getGameDetails();
  }
  render() {
    const game = this.state.game;
    return (
      <>
        {game !== null ? (
          <main className="details">
            <Link to="/">
              <button>{"<- Back"}</button>
            </Link>
            <h1>{game.name}</h1>
            <img
              className="poster"
              src={game.background_image}
              alt={game.name}
            />
            <h2>screenshots</h2>
            <div className="screenshots">
              {game.short_screenshots.map((img) => {
                return <img src={img.image} alt={game.name} />;
              })}
            </div>
          </main>
        ) : (
          <p>Loading ...</p>
        )}
      </>
    );
  }
}

export default Details;
