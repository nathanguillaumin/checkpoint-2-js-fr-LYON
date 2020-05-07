import React from 'react';

class ShortScreen extends React.Component {
  render() {
    getGame = () => {
      axios.get('https://wild-games.herokuapp.com/api/v1')
  
      .then(res => res.data)
  
      .then(data => {
        this.setState({gameList: data});
      })
    };
    const params = props.match.params;
  return (
    <div>
      {console.log(props.name)}
      <p>{props.name}</p>
      <img src={short_screenshots} alt={props.name} />
    </div>
  )
  }
}

export default ShortScreen;