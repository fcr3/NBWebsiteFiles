import React, {Component} from 'react';
import '../styles/homepage.css';
import {connect} from 'react-redux';
import params from '../styles/particleParams';
import Particles from 'react-particles-js';

import '../styles/homepage.css';
import neurons from '../assets/neurons.png';

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
          <div className="aboutcontent">
            <h3 className="homesubheading">about us</h3>
            <div className="aboutdescription">
              <h4 className="homewords">
                <i>Generally speaking, neurotechnology refers to any artificial means to interact with the workings of the brain.</i>
              </h4>

              <p className="homewords">
                At Neurotech@Berkeley, we provide a forum to learn about the many technologies used in research and industry to collect and analyze signals from the brain. As a student club, we focus more on
              non-invasive techniques such as electroencephalography (EEG),
              transcranial magnetic stimulation (TMS), and functional magnetic
              resonance imaging (fMRI). We aim to educate the community about the
              challenges and benefits of biosensing and neurotechnology, by providing
              them with a variety of biosensing hardware, along with support through
              regular meetups, workshops, and in-person help. We further aim to be the
              central repository for biosensing hardware, which students can rely on for
              hobby, class, hackathon, and other projects.
              </p>

              <p className="homewords">Every semester, Neurotech@Berkeley hosts
              a <a href="https://decal.berkeley.edu/">decal</a> course
              related to neurotechnology. </p>
            </div>
          </div>
          <div className="aboutcontent neuronpic">
            <img className="neurons" src={neurons} alt="neurons" />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(() => {return {}}, null)(HomePage);
