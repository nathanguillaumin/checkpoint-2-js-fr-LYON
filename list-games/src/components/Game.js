import React from 'react';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className={this.props.slug}>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default Game;