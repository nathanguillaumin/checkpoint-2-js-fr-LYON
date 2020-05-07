import React from 'react';
import { useParams } from 'react-router-dom';

function GameScreenshots(props) {

    const params = props.match.params;
    return (
        <div className='screenshot-container'>
            {props.allGames.filter(singleGame => singleGame.slug === params.GameSlug).map(singleGame => (
                <div className='hello'>{singleGame.name}</div>
            ))}
        </div>
    )
}

export default GameScreenshots;