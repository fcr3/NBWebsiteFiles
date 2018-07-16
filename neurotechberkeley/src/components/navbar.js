import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav>
        <div>
          <Link to="/"><img src="/imgs/logo.png" alt="Home" /></Link>
        </div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/decal">Decal</Link>
          <Link to="/posts">Posts</Link>
          <a href="https://groups.google.com/a/lists.berkeley.edu/forum/#!forum/neurotech-berkeley/join">
            Join Mailing List
          </a>
          <a href="https://github.com/NeurotechBerkeley/">Github</a>
          <a href="https://www.facebook.com/neurotechberkeley/">Facebook</a>
        </ul>
      </nav>
    );
  }
}

export default connect(() => {}, null)(Navbar);
