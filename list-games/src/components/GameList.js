import React, { Component } from 'react'
import axios from 'axios'
import Game from './Game'

export class GameList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       info : [],
       id : 20,
    }
  }  

  componentDidMount(){
    axios.get(' https://wild-games.herokuapp.com/api/v1')
    .then(res => {
      // console.log(res.data);   

      this.setState({info : res.data })
    })
  }

  handleDelete = ()=>{
    const { info, id } = this.state
    const newInfo = [...info.slice(0,id)]

    this.setState( {info : newInfo, id : id-1 } )
    console.log(id);

    if (id === 1) {
      this.setState({id : 1})
    }  
  }

  handleFilter = () =>{
    const { info } = this.state;

    const infoFilter = info.filter(i => {
      return i.rating >= 4.5;
    })

    this.setState({ info : infoFilter})

  }

  
  render() {

    const info = this.state.info.map( i => ( 
      <div key = {i.id}>
        <h1>{i.name}</h1>
        <p>{i.released}</p>
        <p>{i.rating}</p>
        <img src={i.background_image} alt=""/>
        <div>
        </div>
  
      </div>
    ))
  
    return (
    <div>
      <Game info ={info} 
      delete = {this.handleDelete}
      filter = {this.handleFilter}
      />
    </div>
    )

  }
}


export default GameList
