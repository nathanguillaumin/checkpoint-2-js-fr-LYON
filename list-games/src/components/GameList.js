import axios from "axios";
import React from "react";
import "./game.css";
import Game from "./Game.js";

class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        // Send the request
        axios
            .get("https://wild-games.herokuapp.com/api/v1")
            // Extract the DATA from the received response
            .then(response => response.data)
            // Use this data to update the state
            .then(data => {
                this.setState({
                    games: data
                });
            });
    }
    handleDelete = (gameTobeDeleted, index) => {
        this.setState({
            games: [...this.state.games.filter(g => g.id !== gameTobeDeleted)]
        });
    };

    render() {
        return (
            <div className="display-name">
                {this.state.games.map((g, index) => {
                    return (
                        <Game
                            key={index}
                            name={g.name}
                            img={g.background_image}
                            id={g.id}
                            rating={g.rating}
                            handleDelete={this.handleDelete}
                        />
                    );
                })}
            </div>
        );
    }
}

export default GameList;