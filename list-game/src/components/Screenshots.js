import React from 'react';
import { Link } from 'react-router-dom';
import './Screenshots.css';

const Screenshots = (props) => {
  const params = props.match.params;
  const game = props.allGameList.find((game) => game.id === parseInt(params.id));
  /* console.log(game); */
  const screenshotsArray = game.short_screenshots;
  /* console.log(screenshotsArray); */
  const imagesList = screenshotsArray.map(image => <img key={image.id} src={image.image} alt={game.name} />);
  return (
    <div className='screenshots'>
      <h2>Screenshots of the game: {game.name}</h2>
      {imagesList}
      <p><Link to='/'>Back home</Link></p>
    </div>
  );
};

export default Screenshots;
