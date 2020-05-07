import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Link } from 'react-router-dom';

function Game (props) {
  return (
    <Card style={{ width: '18rem', marginTop: '20px' }}>
      <Card.Img variant='top' src={props.background_image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        </Card.Text>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>Rating: {props.rating}</ListGroupItem>
        <ListGroupItem>Released date: {props.released}</ListGroupItem>
        <ListGroupItem>Genres: <br />
          <ul>
            {props.genres.map(genre =>
              <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </ListGroupItem>
      </ListGroup>
      <Card.Body>
        <button onClick={props.delGame.bind(this, props.id)} style={btnStyle}>Delete</button>
        <Link to={`/jeu/screenshots/${props.id}`}>Screenshots</Link>
      </Card.Body>
    </Card>
  );
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  width: '30%',
  height: '20px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '12px'
};

export default Game;
