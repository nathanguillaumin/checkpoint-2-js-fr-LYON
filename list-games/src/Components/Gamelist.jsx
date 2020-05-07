import  React from 'react'
import axios from 'axios'

class Gamelist extends React.Component {
  state = {
    games : []
  }


  getGame = () => {
    axios.get('https://wild-games.herokuapp.com/api/v1')
    .then(response => response.data)
    .then(data => {
      console.log(data)
      this.setState({
        games : data
      })
    })
  }

  render() {
    return (
      <div>


      </div>







    )
  }


}


export default Gamelist ;