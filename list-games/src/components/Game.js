import React from 'react';
import '../styles/game.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={this.props.slug}>
                <div className='game-banner' style={{backgroundImage: `url(${this.props.background})`}}>
                    <h2>{this.props.name}</h2>
                </div>
                
            </div>
        )
    }
}

export default Game;