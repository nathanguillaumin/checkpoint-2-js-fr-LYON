import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import GameList from './GameList';


class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {
        id: 0,
        name: '',
        background_image:'',
        rating: ''
      
      }
    };
  }

  componentDidMount() {
    const gameId = this.props.match.params.gameId;
    this.loadGame(gameId);
  }

  componentDidUpdate(prevProps) {
    const {
      match: {
        params: { gameId }
      }
    } = this.props;
    const prevPostId = prevProps.match.params.gameId;
    if (prevPostId !== gameId) {
      this.loadGame(gameId);
    }
  }

  loadGame(gameId) {
    const url = `https://wild-games.herokuapp.com/api/v1/${gameId}`;
    
    axios
      .get(url)
      .then(res => res.data)
      .then(data => {
        this.setState({
          character: {
            id: data.id,
            name: data.name,
            background_image: data.background_image,
            rating: data.rating
          }
        });
      });
  }

  render() {
    const game = this.state.game;
    return (
      <div>
        <header className="App-header">
          <h1 className="App-title">List of Games</h1>
          
          <p>
            <Link to="/">Back to Games </Link>
          </p>
        </header>
        <div className="Game">
        <img src={game.background_image} alt={game.name} />

          <ul>
            <li>
              ID: <strong>{game.id}</strong>
            </li>
            <li>
              Name: <strong>{game.name}</strong>
            </li>
            <li>
              Rating: <strong>{game.rating}</strong>
            </li>
            <li>
              background_image: <strong>{game.background_image}</strong>
            </li>

          </ul>
        </div>
        <GameList />

      </div>

    );
  }
}


export default Game;
