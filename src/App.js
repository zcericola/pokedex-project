import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">PROFESSOR OAK'S POKEDEX</h1>
        </header>
        <Home />
               
      </div>
    );
  }
}

export default App;
