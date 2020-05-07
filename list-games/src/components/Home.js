import React from 'react';
import GameList from './GameList';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allGames: []
        }
    }

    render() {
        return (
            <GameList getAllGames={this.props.getAllGames}/>
        )
    }   
}

export default Home;