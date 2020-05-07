import React from 'react';
import './App.css';
import GameList from './components/GameList';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gameList: [],
      filter: false,
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

  filtered = () => {
    this.setState((prevState) => {return {filter: !prevState.filter}})
  };

  handleClick = (e) => {
    const event = e.target.id;
    const index = this.state.gameList.findIndex(event)
    this.setState({gameList: this.state.gameList.slice(index,0)})
  };

  render() {
    const {gameList, filter} = this.state;
    const filteredGame = gameList
    .filter(g => !filter || g.rating >= 4.5)
    console.log(filteredGame);
  return (
    <div>
      <button onClick={this.filtered}>best game</button>
      <GameList game={filteredGame} handleClick={this.handleClick} />
    </div>
  );
  }
}

export default App;
