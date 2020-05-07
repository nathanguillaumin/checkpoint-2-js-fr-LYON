// <Game /> récupère avec des props les informations de chaque jeu(name, background_image, rating…) et les affiche au format de ton choix.
// <Game /> contient un < button > qui permet au click de supprimer un jeu du state.Il n'y a pas besoin de le supprimer de l'API.

import React from 'react';

function Game(props) {
    return (
        <div className='gameCard'>
            <picture className='gameBGimage'>
                <img src={props.genres.image_background} alt={props.genres.name} />
            </picture>
            <picture className='gameCardImage'>
                <img src={props.image} alt={props.alt} />
            </picture>
            <div className='gameName'>
                <h2>{props.nameOfGame}</h2>
                <p>Rating : {props.rating} / 5</p>
            </div>
                <p>{props.genre.name}</p>
            <button className='button'>Remove it !</button>
        </div>
    )
}

export default Game;