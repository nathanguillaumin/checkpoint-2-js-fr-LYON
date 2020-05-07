import React from 'react';
import './App.css';
import GameList from './components/GameList'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameDetails from './components/GameDetails'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route exact path="/">
          <GameList />
        </Route>
        <Route
              exact
              path="/jeu/screenshots/:id"
              render={(routeProps) => <GameDetails {...routeProps} />}
            />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
