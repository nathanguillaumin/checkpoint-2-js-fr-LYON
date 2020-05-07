import React from 'react';
import './App.css';
import { Component } from 'react';
import Game from './components/Game';
import axios from 'axios';
//import GameList from './components/GameList';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      background_image: '',
      rating: ''
    };
  }

  /*
  componentDidMount() {
    axios.get(`https://wild-games.herokuapp.com/api/v1`)
      .then(res => res.data)
      .then(data => {
        return {
        
        };
      })
  } */

  render () {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}


export default App;
