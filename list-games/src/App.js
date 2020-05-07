import React from 'react';
import './App.css';
import GameList from './components/GameList';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ShortScreen from './components/ShortScreen';
import Game from './components/Game';

function App () {

  return (
    <div>
      <Router>
      <Switch>
        <Route exact path='/' component={GameList} />
        <Route exact path='/jeu/screenshots/:id' component={Game} />
      </Switch>
      </Router>
    </div>
  );
  }

export default App;
