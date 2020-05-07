import React from 'react';
import '../styles/game.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            singleGame: this.props.singleGame,
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
                        <p><span className='info-category'>Genre:</span> {this.props.genre[0].name}</p>
                        <p><span className='info-category'>Released:</span> {this.props.released}</p>
                        <p><span className='info-category'>Rating:</span> {this.props.rating}</p>
                        <button type='button' className='delete-game' onClick={() => this.props.onDeleteGame(this.props.id)}>Delete</button>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Game;