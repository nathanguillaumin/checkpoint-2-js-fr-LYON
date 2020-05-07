import React from 'react';
import './App.css';
import Gamelist from './Components/Gamelist';
import { BrowserRouter, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Gamelist/>
    </div>
  );
}

export default App;
