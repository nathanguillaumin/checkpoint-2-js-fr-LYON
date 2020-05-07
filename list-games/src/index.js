import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Game from "./components/Game";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Game} />
        <Route path="/game/:gameId" component={Game} />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
