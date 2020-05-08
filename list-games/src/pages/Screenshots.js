import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class Screenshots extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      games: ''
    }
  }
    
    render() {
      const { id } = this.props.match.params;
    console.log(id)
    const filterImages = this.props.games.filter(game => game.id === parseInt(id));
    console.log(filterImages[0]);
    return (
        <div>
          <a href='/'>Go back to HomePage</a>
            {filterImages[0].short_screenshots.map(screen => {
              return (
              <Container key={screen.id}>
              <Row>
                <Col xs={6} md={4}>
                  <Image src={screen.image} thumbnail />
                </Col>
              </Row>
              <h2>{screen.name}</h2>
            </Container>
              )
            })}
        </div>
    );
  }  
}

export default Screenshots;
