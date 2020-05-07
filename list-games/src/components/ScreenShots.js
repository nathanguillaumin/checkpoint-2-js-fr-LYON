import React from 'react';
import { Link } from "react-router-dom";
import './ScreenShots.css';

function ScreenShots (props) {

  const params = props.match.params
  console.log(params.id)
  const currentGame = props.gameList.filter(game => game.id === parseInt(params.id))
  console.log(currentGame[0].short_screenshots)
  
  return (
  <div className='screen-page'>
    <Link to="/">Retourner à la liste des jeux</Link>
    <p>Voici les screenshots disponibles pour le jeu {currentGame[0].name}</p>
    <div className='screen-container'>
      {currentGame[0].short_screenshots.map(screen => <li key={screen.id}> <img src={screen.image} /></li>)}
    </div>
  </div>
  )}

export default ScreenShots;
