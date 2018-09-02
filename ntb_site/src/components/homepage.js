import React, {Component} from 'react';
import '../styles/homepage.css';
import {connect} from 'react-redux';
import params from '../styles/particleParams';
import Particles from 'react-particles-js';

class HomePage extends Component {
  render() {

    const particles = (<Particles className="particles" params={params} />);
    const description = (<p className="motto">
      a vibrant neurotechnology community at uc berkeley
    </p>);

    return (
      <div className="homepage">
        <div className="welcomepane">
          <h1 className="title">neurotech @ berkeley </h1>
          {description}
          {particles}
        </div>
        <div className="simpleaboutpane">
          <div className="homecontent">
            This is the simple pane page.
          </div>
        </div>
      </div>
    )
  }
}

export default connect(() => {return {}}, null)(HomePage);
