import React, { Component } from 'react';
import brain from './assets/brain_white.png';
import menuicon from './assets/menu.svg';
import './styles/App.css';

import {Route} from 'react-router-dom';
import Switcher from './components/switcher';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={brain} className="App-logo" alt="logo" />
          <img src={menuicon} alt="menu" className="menuiconbar"/>
        </header>
        <Switcher />
      </div>
    );
  }
}

export default App;
