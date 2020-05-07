import React from "react";
import Axios from "axios";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: null,
    };
  }

  getGameDetails = async () => {
    const game = await (
      await Axios.get("https://wild-games.herokuapp.com/api/v1")
    ).data.filter(
      (item) => item.id === parseInt(this.props.match.params.id) && item
    );
    this.setState({ game });
  };

  componentDidMount() {
    this.getGameDetails();
  }
  render() {
    return (
      <>
        {this.state.game !== null ? (
          <h1>{this.state.game}</h1>
        ) : (
          <p>Loading ...</p>
        )}
      </>
    );
  }
}

export default Details;
