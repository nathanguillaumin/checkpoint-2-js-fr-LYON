import React from 'react';
import './App.css';
import GameList from './components/GameList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Screenshots from './components/Screenshots'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={GameList} />
          <Route path='/jeu/screenshots/:key' >
            <Screenshots />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
