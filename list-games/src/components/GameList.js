import React, { Component } from 'react'
import axios from 'axios'

export class GameList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       info : [],
    }
  }  

  componentDidMount(){
    axios.get(' https://wild-games.herokuapp.com/api/v1')
    .then(res => {
      // console.log(res.data);   

      this.setState({info : res.data })
    })
  }
  
  render() {
console.log(this.state.info);

    const info = this.state.info.map( i => ( 
      <div key = {i.id}>
        <h1>{i.name}</h1>
        <p>{i.released}</p>
        <img src={i.background_image} alt=""/>
      </div>
    ))
  
    return (
    <div>
      {info}
    </div>
    )

  }
}


export default GameList
