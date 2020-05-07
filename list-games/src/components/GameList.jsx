// <GameList />récupère les jeux de l'API et les affiche dans autant de composants <Game />

import React from 'React';
import Game from './Game';

function GameList() {
    return (
        <div>
            <Game />
        </div>
    );
}


export default GameList;