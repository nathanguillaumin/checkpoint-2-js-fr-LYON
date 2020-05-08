import React from 'react';
import './Game.css';

export default function Game(props) {
  return (
    <div>
      <h1>Name:{props.name}</h1>
        <p>released : {props.released}</p> 
        <p>rating : {props.rating}</p> 
      <img src={props.background_image} alt={props.name} className='gameImg' /> 
    </div>
  )
}