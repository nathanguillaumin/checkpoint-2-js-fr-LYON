import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";

export class GameDetails extends Component {

  constructor(props) {
    super(props);
    this.state={
      game : null
    }
  }
  componentDidMount(){
    this.getGame()
  }
  getGame = async () => {
    const id = this.props.match.params.id;
    let game = await Axios.get(
      `https://wild-games.herokuapp.com/api/v1`
    )
      .then((response) => response.data)
      .then((data) => data.filter(i => i.id == id)[0])  // == car i.id est un string et id un numb
    this.setState({ game });
  };

  render() {
    if (this.state.game === null ){
      return (<p>Loading...</p>)
    }else{
      return (
        <div>
          <Link to='/'>Go Home</Link>
          <h2>{this.state.game.name}</h2>
          {this.state.game.short_screenshots.map(screenShot => <img src={screenShot.image} alt={`sreenshot du jeu ${this.state.game.name}`}/>)}
        </div>
      )
    }
  }
}

export default GameDetails
