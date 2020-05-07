import React from 'react';

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
        return (
            <div className='game-list-container'>

            </div>
        )
    }

}

export default GameList;