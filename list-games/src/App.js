import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  console.log([{ age: 22 },{ age: 12 }].map(p => p.age).filter(a => a > 20).reduce((a, b) => a + b))
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
