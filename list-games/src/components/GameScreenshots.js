import React from 'react';
import { useParams } from 'react-router-dom';

function GameScreenshots(props) {

    const params = props.match.params;
    return (
        <div className='screenshot-container'>
            {props.allGames.filter(singleGame => singleGame.slug === params.GameSlug).map(singleGame => (
                singleGame.short_screenshots.map(singleScreenShot => (
                <img className='media' src={singleScreenShot.image}/>
            ))))}
        </div>
    )
}

export default GameScreenshots;