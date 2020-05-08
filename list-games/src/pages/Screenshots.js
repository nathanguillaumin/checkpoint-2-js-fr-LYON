import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from 'react-bootstrap/Button';


class Screenshots extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.match.params.id,
      games: ''
    }
  }

    componentDidMount() {
      this.loadData();
    }

    loadData() {
      this.setState({id: this.props.match.params.id, games: this.props.games, loading: false})
    }
    
    render() {
      const { id } = this.props.match.params;
      const filterImages = this.props.games.filter(game => game.id === parseInt(id));
      console.log(filterImages[0]); 

      
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      {this.state.games ? 
      <>
        <Button variant="warning" href='/'>Go back to Home Page</Button>
          {filterImages[0].short_screenshots.map(screen => {
            return (
            <Container key={screen.id}>
            <Row style={{justifyContent: 'center', marginTop: '20px'}}>
              <Col xs={6} md={4}>
                <Image src={screen.image} thumbnail />
              </Col>
            </Row>
            <h2>{screen.name}</h2>
          </Container> 
            )
          })}
          </>
       : <CircularProgress />}
       </div>
        
    );
  }  
}

export default Screenshots;
