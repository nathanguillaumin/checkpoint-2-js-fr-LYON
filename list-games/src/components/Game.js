import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Game (props) {
  return (
    <Card style={{ width: '18rem', margin: '20px', height: '600px', overflow: 'scroll', paddingBottom: '30px' }}>
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
          <ul style={{listStyle: 'none', padding: '0'}}>
            {props.genres.map(genre =>
              <li key={genre.id}>{genre.name}</li>)}
          </ul>
        </ListGroupItem>
      </ListGroup>
      <Card.Body style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Button variant="danger" onClick={props.delGame.bind(this, props.id)} style={{width: '40%', marginBottom: '10px'}}>Delete</Button>
        <Link to={`/jeu/screenshots/${props.id}`}><Button variant="primary">Screenshots</Button></Link>
      </Card.Body>
    </Card>
  );
}

const btnStyle = {
  color: '#fff',
  width: '30%',
  height: '20px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '12px'
};

export default Game;
