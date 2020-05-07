import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GameList from './components/GameList';
import Header from './components/Header';
import Screenshots from './pages/Screenshots';
import Home from './pages/Home';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      games: [],
      bestGames: false
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

  delGame = (id) => {
    this.setState({ games: [...this.state.games.filter(game => game.id !== id)] });
  }

  handleClick = () => {
    this.setState({ bestGames: !this.state.bestGames })
  }

  render () {
    const { bestGames, games } = this.state;
    const filteredGames = games.filter(game => {
      return game.rating >= 4.5;
    })

  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/'  >
            <Home 
              bestGames={bestGames}
              games={games}
              filteredGames={filteredGames} 
              handleClick={this.handleClick} 
              delGame={this.delGame}
            />
          </Route>
          <Route exact path='/jeu/screenshots/:id' games={games} 
          render={(props) => <Screenshots {...props} games={games} />} />
      </Switch>
      </Router>
    </div>
  );
}
}

export default App;
