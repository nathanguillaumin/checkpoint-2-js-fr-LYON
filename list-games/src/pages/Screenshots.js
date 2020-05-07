import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export class Screenshots extends Component {
  render () {
    const id = this.props.match.params.id;
    const games = this.props.games;
    console.log(games);
    const filterImages = games.filter(game => game.id === parseInt(id)).map(g => g.short_screenshots);
    console.log(filterImages);
    
    return (
        <div>
            {filterImages.map((item, index) => <h3 key={index}>hello</h3>)}
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
