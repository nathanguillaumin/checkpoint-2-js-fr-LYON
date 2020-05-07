import React from 'react';
import './App.css';
import Gamelist from './Components/Gamelist';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Screenshots from './Components/Screenshots';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path = "/" component={Gamelist}></Route>
        <Route exact path ="/jeu/screenshots/:id" component={Screenshots}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
