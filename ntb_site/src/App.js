import React, { Component } from 'react';
import brain from './assets/brain_white.png';
import menuicon from './assets/menu.svg';
import './styles/App.css';

import Switcher from './components/switcher';
import arrow from './assets/arrow.svg';

class App extends Component {
  constructor(props) {
    super(props);
    window.onbeforeload = function() {
      window.scrollTo(0,0);
    }
    this.state = {
      menuOn: false
    }
  }

  componentDidMount() {
    window.onbeforeload = function() {
      window.scrollTo(0,0);
    }
    window.onload = function() {
      window.scrollTo(0,0);
    }
  }

  render() {
    var menuclasses = ["sidemenu"];
    var appclasses = ["App"]
    if (this.state.menuOn) {
      menuclasses.push("appear");
    }

    return (
      <div className={appclasses.join(" ")}>
        <header className="App-header">
          <img src={brain} className="App-logo" alt="logo" />
          <img onClick={(e) => {this.setState({menuOn: !this.state.menuOn})}} src={menuicon} alt="menu" className="menuiconbar"/>
        </header>

        <div className={menuclasses.join(" ")}>
          <div className="menutab" onClick={(e) => {this.setState({menuOn: !this.state.menuOn})}}>
            <img className="menuexit" src={arrow} alt="arrow" />
          </div>
          <a className="menulink" href="https://www.facebook.com/neurotechberkeley/">
              facebook
          </a>
          <a className="menulink" href="https://github.com/NeurotechBerkeley">
              github
          </a>
          <a className="menulink" href="https://groups.google.com/a/lists.berkeley.edu/forum/#!forum/neurotech-berkeley/join">
              mail list
          </a>
        </div>

        <Switcher />
      </div>
    );
  }
}

export default App;
