import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class Header extends Component {
  render () {
    return (
      <div style={headerStyle}>
        <h1>UniGames</h1>
      </div>
    );
  }
}

const headerStyle = {
  backgroundColor: '#333',
  color: 'red',
  marginBottom: '40px',
  height: '15vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

export default Header;
