import React from 'react';

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
      <div className='game'>
        {this.props.map(game => {
          return (
            <article key={game.name}>
              <h3>{game.name}</h3>
              <img src={game.background_image} alt={game.name} />
              <p>{game.rating}</p>
            </article>
          );
        })}
      </div>
    );
  }
}

export default Game;
