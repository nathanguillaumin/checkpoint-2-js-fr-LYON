import React from 'react';
import '../Game.css';
import Screenshot from './Screenshots';
import {Link} from "react-router-dom";


function Game({ background, name, slug, released, rating, deleteGame,id, image}) {
  return (
    <div className='game'>
      <h1>{name} </h1>
      <img src={background} alt={name} />
      <section>
        <p>{slug} <span>,date of release : {released}</span></p>
        <p>Rating : {rating}</p>
      </section>
      <button onClick={(e) => deleteGame(e, name)}>Delete this Game </button>
      <div>
        <li>
          <Link to={`/jeu/screenshots/${id}`}>
          {name}
          </Link>
        </li>
        {/* <Screenshot name={name} background={background} id={id}/> */}
      </div>
    </div>
  );
};

export default Game;