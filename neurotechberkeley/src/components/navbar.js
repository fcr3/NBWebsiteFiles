import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/navbar.css';
import {Link} from 'react-router-dom';
import logo from '../imgs/logo.png';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navWrapper">
        <div className="logo">
          <Link to="/"><img src={logo} alt="Home" /></Link>
        </div>
        <div className="links">
          <Link to="/" className="link">Home</Link>
          <Link to="/decal" className="link">Decal</Link>
          <Link to="/posts" className="link">Posts</Link>
          <a className= "link" href="https://groups.google.com/a/lists.berkeley.edu/forum/#!forum/neurotech-berkeley/join">
            Join Mailing List
          </a>
          <a className="link" href="https://github.com/NeurotechBerkeley/">Github</a>
          <a className="link" href="https://www.facebook.com/neurotechberkeley/">Facebook</a>
        </div>
        </div>
      </nav>
    );
  }
}

export default connect(() => {}, null)(Navbar);
