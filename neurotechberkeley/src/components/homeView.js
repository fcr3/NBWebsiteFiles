import React, {Component} from 'react';
import '../styles/homeView.css';
import {connect} from 'react-redux';
import params from '../styles/particleParams';
import Particles from 'react-particles-js';

class homeView extends Component {
  render() {
    return (
      <div className="homeView">
        <div className="front Pane">
          <h1 className="title">NUEROTECHNOLOGY @ BERKELEY </h1>
          <h3 className="motto">
            We ae dedicated to fostering a vibrant neurotechnology community as UC Berkeley.
            Join us for hackathons, workshops, talks, socials, and more!
          </h3>
        </div>

        <div className="aboutPane">
        </div>

        <div className="staffPane">
        </div>

        <div className="eventsPane">
        </div>

        <Particles className="particles" params={params} />
      </div>
    )
  }
}

export default connect(() => {return {}}, null)(homeView);
