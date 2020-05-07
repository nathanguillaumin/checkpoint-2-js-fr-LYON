import React, { Component } from 'react';
import Game from './Game';
import axios from 'axios';

export class GameList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      games: ''
    };
  }

  loadData () {
    const searchUrl = 'https://wild-games.herokuapp.com/api/v1';

    axios.get(searchUrl)
      .then(res => res.data)
      .then(data => {
        this.setState({games: data})
      });
    
  }

  componentDidMount() {
      this.loadData();
  }

  render () {
    return (
      <div>
        <h1>hello</h1>
        <Game {...games} />
      </div>
    );
  }
}

export default GameList;
