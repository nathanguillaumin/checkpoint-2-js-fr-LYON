import React from 'react';
import Game from './Game.js';

class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allGames: [],
            listIsLoading: true
        }
    }

    getGameList = async() => {
        await window.fetch('https://wild-games.herokuapp.com/api/v1')
        .then((response) => {
            return response.json()
            .then((data) => {
                this.setState({ allGames: data })
            })
            .catch(() => {
                this.setState({ listIsLoading: false })
            })
        })
    }

    componentDidMount() {
        this.getGameList();
    }

    render() {
        const allGames = this.state.allGames;
        return (
            <div className='game-list-container'>
                {allGames.map(game => (
                    <Game id={game.id} slug={game.slug} name={game.name}/>
                )  
                )}   
            </div>
        )
    }

}

export default GameList;