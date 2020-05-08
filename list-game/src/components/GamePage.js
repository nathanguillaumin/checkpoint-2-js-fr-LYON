import React from 'react';
import { Link } from 'react-router-dom';

const GamePage = (props) => {
  // Get the URL parameters
  const params = props.match.params;
  return (
    <div>
      <p>Game Id: <em>{params.gameId}</em></p>
      {/* <Link to='/'>Back to list</Link> */}
    </div>
  );
}

export default GamePage;
