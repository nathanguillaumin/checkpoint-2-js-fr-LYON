import React from "react";
import { Link } from 'react-router-dom';
import game from "../game.json";

function GameList() {
  return (
    <div className="GameList">
     
      {game.map(game => (
        <p key={game.id} className="Game">

          <Link to={`/game/${game.id}`}>{game.name}</Link>

        </p>

      ))}

    </div>
  );
}

export default GameList;