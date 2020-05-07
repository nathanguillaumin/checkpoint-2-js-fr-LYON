import React from 'react';
import './App.css';
import Home from './components/Home';
import GameScreenshots from './components/GameScreenshots';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allGames: [],
    }
  }

  getAllGames = (allGames) => {
    this.setState({ allGames })
  }

  render() {
    return (
      <Router>
      <Switch>
        <Route exact path='/'>
          <Home getAllGames={this.getAllGames}/>
        </Route>
        <Route exact path='/game/:GameSlug' render={(routeProps) => (
                <GameScreenshots allGames={this.state.allGames} {...routeProps} />
              )}/>
      </Switch>
  
      </Router>
    );
  }
  
}

export default App;
