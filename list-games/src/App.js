import React from 'react';
import './App.css';
import GameList from './components/GameList';
import ScreenShots from './components/ScreenShots';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path='/' component={GameList} />
        <Route path="/jeu/screenshots/:id" component={ScreenShots} />
      </Switch>
      </div>
    </Router>

  );
}

export default App;
