import React, { Component } from 'react';
import './App.css';
import { HangmanGame } from './components/HangmanGame';

class App extends Component {
  render() {
    return (
      <HangmanGame word="hello" />
    );
  }
}

export default App;
