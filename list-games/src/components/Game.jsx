// <Game /> récupère avec des props les informations de chaque jeu(name, background_image, rating…) et les affiche au format de ton choix.
// <Game /> contient un < button > qui permet au click de supprimer un jeu du state.Il n'y a pas besoin de le supprimer de l'API.

import React from 'React';
import axios from 'axios';

class Game extends React.Component {
    state = {
        name: '',
        background_image: '',
        rating: ''
    }

    render() {
        return (
            <ul>
                {this.state.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}




export default Game;