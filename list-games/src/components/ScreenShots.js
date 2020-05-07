import React from 'react';
import { Link } from "react-router-dom";

function ScreenShots ({ gameList }) {

  console.log(gameList[0])
  
  return (
  <div className='screen-page'>
    <Link to="/">Retourner à la liste des jeux</Link>
    <div className='screen-container'>
      <p>Voici les screenshots disponibles pour le jeu </p>
    </div>
  </div>
  )}

export default ScreenShots;
