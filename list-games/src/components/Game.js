import React, { Component } from 'react';
import axios from 'axios';
import GameList from './GameList';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {
        id: 0,
        name: ''
    
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
    const url = `https://wild-games.herokuapp.com/api/v1${gameId}`;
    axios
      .get(url)
      .then(res => res.data)
      .then(data => {
        this.setState({
          game: {
            id: data.id,
            name: data.name
            
          }
        });
      });
  }

  render() {
    const game = this.state.game;
    return (
      <div className="Game">
        <h1>List of Games </h1>

        <GameList />
        
      </div>
     
    );
  }
}


export default Game;
