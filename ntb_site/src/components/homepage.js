import React, {Component} from 'react';
import '../styles/homepage.css';
import {connect} from 'react-redux';
import params from '../styles/particleParams';
import Particles from 'react-particles-js';

import '../styles/homepage.css';
import neurons from '../assets/neurons.png';
import linkedin from '../assets/linkedin.svg';
import facebook from '../assets/facebook.svg';
import gplus from '../assets/gplus.svg';

class HomePage extends Component {

  componentDidMount() {
    window.onload = function() {
      window.scrollTo(0,0);
    }
  }

  render() {

    const particles = (<Particles className="particles" params={params} />);
    const description = (<p className="motto">
      a vibrant neurotechnology community at uc berkeley<br></br>
      first infosession on 9/11 @ wheeler 224 from 8-9pm<br></br>
      look for more events on facebook
    </p>);

    return (
      <div className="homepage">

        <div className="welcomepane">
          <h1 className="title">NEUROTECH@BERKELEY </h1>
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
              At Neurotech@Berkeley, we provide a forum to learn about the many technologies used in research and
              industry to collect and analyze signals from the brain. As a student club, we focus more on
              non-invasive techniques such as electroencephalography (EEG),
              transcranial magnetic stimulation (TMS), and functional magnetic
              resonance imaging (fMRI). We aim to educate the community about the
              challenges and benefits of biosensing and neurotechnology, by providing
              them with a variety of biosensing hardware, along with support through
              regular meetups, workshops, and in-person help. We further aim to be the
              central repository for biosensing hardware, which students can rely on for
              hobby, class, hackathon, and other projects.
              </p>
            </div>
          </div>
          <div className="aboutcontent neuronpic">
            <img className="neurons" src={neurons} alt="neurons" />
          </div>
        </div>

        <div className="simpleaboutpane staff">
          <h3 className="homesubheading">meet the staff</h3>
          <div className="staffcontent">
            <div className="staffmember kayla">
              <div className="staffinfo">
                Kayla
                <div className="socialmedia">
                  <a href="https://www.linkedin.com/"><img className="sm" src={linkedin} alt="in" /></a>
                  <a href="https://www.facebook.com/"><img className="sm" src={facebook} alt="fb" /></a>
                  <a href="https://plus.google.com/"><img className="sm" src={gplus} alt="gplus" /></a>
                </div>
              </div>
            </div>
            <div className="staffmember mridula">
              <div className="staffinfo">
                Mridula
                <div className="socialmedia">
                  <a href="https://www.linkedin.com/"><img className="sm" src={linkedin} alt="in" /></a>
                  <a href="https://www.facebook.com/"><img className="sm" src={facebook} alt="fb" /></a>
                  <a href="https://plus.google.com/"><img className="sm" src={gplus} alt="gplus" /></a>
                </div>
              </div>
            </div>
            <div className="staffmember ashton">
              <div className="staffinfo">
                Ashton
                <div className="socialmedia">
                  <a href="https://www.linkedin.com/"><img className="sm" src={linkedin} alt="in" /></a>
                  <a href="https://www.facebook.com/"><img className="sm" src={facebook} alt="fb" /></a>
                  <a href="https://plus.google.com/"><img className="sm" src={gplus} alt="gplus" /></a>
                </div>
              </div>
            </div>
            <div className="staffmember aditya">
              <div className="staffinfo">
                Aditya
                <div className="socialmedia">
                  <a href="https://www.linkedin.com/"><img className="sm" src={linkedin} alt="in" /></a>
                  <a href="https://www.facebook.com/"><img className="sm" src={facebook} alt="fb" /></a>
                  <a href="https://plus.google.com/"><img className="sm" src={gplus} alt="gplus" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default connect(() => {return {}}, null)(HomePage);
