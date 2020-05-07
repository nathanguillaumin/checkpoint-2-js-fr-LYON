import React from 'react';
import './App.css';
import GameList from './components/GameList';
import ScreenShots from './components/ScreenShots';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      gameList: [],
      gameListIsLoading: true
    }
    this.getGames = this.getGames.bind(this);
  }

  componentDidMount() {
    this.getGames();
  }

  getGames = () => {
    axios
      .get('https://wild-games.herokuapp.com/api/v1')
      .then(response => {
        this.setState({ gameList: response.data, gameListIsLoading: false })
      })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route 
              exact path='/'
              render={(routeProps) => (
              <GameList {...this.state} {...routeProps} getGames={this.getGames} />
            )}
            />
            <Route 
              path="/jeu/screenshots/:id" 
              render={(routeProps) => (
                <ScreenShots {...this.state} {...routeProps} />
              )}
            />
          </Switch>
        </div>
      </Router >

    );
  }

}

export default App;
