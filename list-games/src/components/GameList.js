import React from 'react';
import Game from './Game';

function GameList(props) {

    return (
      <div>
        {props.gameListIsLoading ? <p>chargement des données</p> : <Game gameList={props.gameList} />}
      </div>
    )
  }

export default GameList
