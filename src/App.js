import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LetterPicker } from "./components/LetterPicker"

class App extends Component {
  render() {
    return (
      <LetterPicker />
    );
  }
}

export default App;
