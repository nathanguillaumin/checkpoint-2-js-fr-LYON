import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Game from './components/Game';

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
      .then(res => res.data)
      .then(data => {
        return {
          name: game.name,
          img:
        
      }})
  }
 
  return (
    <div className="App">
 
    </div>
  );
}

export default App;
