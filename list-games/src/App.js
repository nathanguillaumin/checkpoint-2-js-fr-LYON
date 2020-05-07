import React from 'react';
import './App.css';
import Gamelist from './Components/Gamelist';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Screenshots from './Components/Screenshots';

function App() {
  return (
    <div className="App">
     <Gamelist/>
     <Switch>
       <Route exact path = "/" component={Gamelist}></Route>
       <Route exact path ="/jeu/screenshots/:id" component={Screenshots}></Route>
     </Switch>
    </div>
  );
}

export default App;
