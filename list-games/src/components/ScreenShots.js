import React from 'react';
import { Link } from "react-router-dom";

function ScreenShots (props) {

  const params = props.match.params
  console.log(params.id)
  const currentGame = props.gameList.filter(game => game.id === parseInt(params.id))
  console.log(currentGame)
  
  return (
  <div className='screen-page'>
    <Link to="/">Retourner à la liste des jeux</Link>
    <p>Voici les screenshots disponibles pour le jeu {currentGame[0].name}</p>
    <div className='screen-container'>
      
      
    </div>
  </div>
  )}

export default ScreenShots;
