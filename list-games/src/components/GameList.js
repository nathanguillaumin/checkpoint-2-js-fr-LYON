import React from 'react';
import Game from './Game.js';
import '../styles/gameList.css';

class GameList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allGames: [],
            listIsLoading: true,
            bestGames: false,
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

    handleDeleteGame = gameID => {
        const game = this.state.allGames.filter(game =>
            game.id !== gameID)
            this.setState({ allGames: game })
    }

    handleBestGames = () => {
        this.setState({ bestGames: !this.state.bestGames })
    }

    componentDidMount() {
        this.getGameList();
    }

    render() {
        const allGames = this.state.allGames;
        return (
            <>
                <div className='filter-container'>
                    <button onClick={this.handleBestGames}>{this.state.bestGames ? 'All Games' : 'Best Games'}</button>
                </div>
                <div className='game-list-container'>
                    {allGames.filter(game => game.rating >= 4.5 || !this.state.bestGames).map(game => (
                        <Game 
                            onDeleteGame={this.handleDeleteGame}
                            getAllGames={this.props.getAllGames}
                            allGames={this.state.allGames}
                            id={game.id} 
                            slug={game.slug} 
                            name={game.name} 
                            background={game.background_image} 
                            rating={game.rating} 
                            genre={game.genres}
                            released={game.released}
                            color={game.dominant_color}
                            key={game.id}
                        />
                    )
                    )}   
                </div>
            </>
        )
    }

}

export default GameList;