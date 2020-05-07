import React from 'react';
import './App.css';
import GameList from './components/GameList';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameList: [],
    }
  }
  componentDidMount() {
    this.getGame();
  };

  getGame = () => {
    axios.get('https://wild-games.herokuapp.com/api/v1')

    .then(res => res.data)

    .then(data => {
      this.setState({gameList: data});
    })
  };

  handleClick = (e) => {
    const event = e.target.id;
    const index = this.state.gameList.findIndex(event)
    this.setState({gameList: this.state.gameList.slice(index,0)})
  };

  render() {
  return (
    <div>
      <GameList game={this.state.gameList} handleClick={this.handleClick} />
    </div>
  );
  }
}

export default App;
