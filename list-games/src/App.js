import React from "react";
import "./App.css";
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GameList from "./components/GameList";
import Details from "./components/Details";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
    };
  }

  getList = async () => {
    const list = await Axios.get(
      "https://wild-games.herokuapp.com/api/v1"
    ).catch((e) => {
      return `Nous avons rencontrer une erreur lors du chargement des jeux ! -> \n ${e}`;
    });
    this.setState({ list: list.statusText === "OK" ? list.data : list });
  };

  removeGame = (e) => {
    let list = this.state.list.slice();
    list = list.filter((item) => item.id !== parseInt(e.target.id));
    this.setState({ list });
  };

  componentDidMount() {
    this.getList();
  }

  render() {
    return (
      <Router>
        <main className="App">
          <h1>Hello Wild Checkpoint 2</h1>
          <Switch>
            <Route exact path="/">
              <GameList
                getList={this.getList}
                remove={this.removeGame}
                {...this.state}
              />
            </Route>
            <Route
              exact
              path="/:id/:slug"
              render={(routeProps) => (
                <Details {...routeProps} {...this.state} />
              )}
            />
          </Switch>
        </main>
      </Router>
    );
  }
}

export default App;
