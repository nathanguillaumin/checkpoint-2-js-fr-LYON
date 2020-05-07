import React from 'react';
import './App.css';
import GameList from './components/GameList';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chose: [],
    }
  }
  componentDidMount() {
    this.getGame();
  };

  getGame = () => {
    axios.get('https://wild-games.herokuapp.com/api/v1')

    .then(res => res.data)

    .then(data => {
      this.setState({chose: data});
    })
  };
  render() {
  return (
    <div>
      <GameList game={this.state.chose} />
    </div>
  );
  }
}

export default App;
