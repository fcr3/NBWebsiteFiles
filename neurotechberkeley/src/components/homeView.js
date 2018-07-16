import React, {Component} from 'react';
import '../styles/homeView.css';
import {connect} from 'react-redux';
//import {Link} from 'react-router-dom';

class homeView extends Component {
  render() {
    return (
      <div className="homeView">
        <div className="frontPane">
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
      </div>
    )
  }
}

export default connect(() => {}, null)(homeView);
