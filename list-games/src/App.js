import React from 'react';
import './App.css';
import { Component } from 'react';
import axios from 'axios';
import GameList from './components/GameList';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      background_image: '',
      rating: ''
    };
  }

  componentDidMount() {
    axios.get(`https://wild-games.herokuapp.com/api/v1`)
      .then(response => response.data)
      .then(data => {
        const tabGame = data.map(game => {
        return {
          name: game.name,
          img: game.img,
          bgimg: game.genres.img,
          rating: game.rating,
          genreName: game.genres.name
        }
      })}
  }

  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}


export default App;
