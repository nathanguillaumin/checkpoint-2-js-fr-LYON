import React from 'react';
import '../styles/game.css';
import { Link } from 'react-router-dom';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allGames: this.props.allGames,
        }
    }
 
    render() {
        return (
            <div className='game-container'>
                <div className={this.props.slug}>
                    <div className='game-banner' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url(${this.props.background})`}}>
                        <h2>{this.props.name}</h2>
                    </div>  
                    <div className='game-info-container'>
                        <Link to={`/game/${this.props.slug}`}>
                            <button onClick={() => {
                        this.props.getAllGames(this.state.allGames)
                    }} className='see-media'>See medias</button>
                        </Link>
                        <p><span className='info-category'>Genre:</span> {this.props.genre[0].name}</p>
                        <p><span className='info-category'>Released:</span> {this.props.released}</p>
                        <p><span className='info-category'>Rating:</span> {this.props.rating}</p>
                        <button className='delete-game' onClick={() => this.props.onDeleteGame(this.props.id)}>Delete</button>
                        
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Game;