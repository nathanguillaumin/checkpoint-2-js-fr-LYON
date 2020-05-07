import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export class Screenshots extends Component {
  render () {
    const id = this.props.match.params.id;
    const games = this.props.games;
    const filterImages = games.find(game => game.id === parseInt(id));
    console.log(filterImages)
    
    return (
        <div>

        </div>
        /*
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src='holder.js/171x180' thumbnail />
          </Col>
        </Row>
        <h2>{this.props.name}</h2>
      </Container>
      */
    );
  }
}

export default Screenshots;
