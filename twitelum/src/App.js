import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cabecalho from './components/cabecalho'

class App extends Component {
  render() {
    return (
     <div className="App">
      <Cabecalho />
     </div>
    );
  }
}

export default App;
