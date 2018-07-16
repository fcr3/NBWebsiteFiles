import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link, Route, Redirect} from 'react-router-dom';
import postView from './components/postView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Testing</h1>
        </header>
        <p> <Link to="/posts">Click here to see cells</Link> </p>
        <Route path="/posts" component={postView} />
        <Route exact path="/" render={() => <Redirect to="/posts" />} />
      </div>
    );
  }
}

export default App;
