// <GameList />récupère les jeux de l'API et les affiche dans autant de composants <Game />

import React from 'React';
import Game from './Game';

function GameList() {
    return (
        <div className='gameCard'>
            <picture className='gameBGimage'>
                <img src={props.genres.image_background} alt={props.genres.name} />
            </picture>
            <div>
                <picture className='gameCardImage'>
                    <img src={props.image} alt={props.alt} />
                </picture>
            </div>
            <div className='gameName'>
                <h3>{props.nameOfGame}</h3>
                <p>`Rating : ${props.rating} / 5`</p>
            </div>
            <div>
                <p>{props.genre.name}</p>
            </div>
            <button className='button'>Remove it !</button>
        </div>
    );
}


export default GameList;