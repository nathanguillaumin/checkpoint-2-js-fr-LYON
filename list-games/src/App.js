import React from 'react';
import './App.css';
import GameList from './components/GameList';
import axios from 'axios';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      gamesList: null
    };
  }

  componentDidMount () {
    axios
      .get('https://wild-games.herokuapp.com/api/v1')
      .then(response => this.setState({ gamesList: response.data }));
  }

  render () {
    return (
      <div className='App'>
        <h1>Games List</h1>
        <GameList {...this.state} />
      </div>
    );
  }
}

export default App;
