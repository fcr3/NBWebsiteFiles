import React, { Component } from 'react';
import './styles/App.css';
import {Route} from 'react-router-dom';
import homeView from './components/homeView';
import postView from './components/postView';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Route exact path="/" component={homeView} />
        <Route exact path="/posts" component={postView} />
      </div>
    );
  }
}

export default App;
