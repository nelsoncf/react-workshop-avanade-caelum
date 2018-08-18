import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import Cabecalho from './components/cabecalho'

class App extends Component {
  render() {
    return (
     <Fragment>
       <Cabecalho  usuario="noslen" />
     </Fragment>
    );
  }
}

export default App;
