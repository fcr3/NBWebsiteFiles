import React, {Component} from 'react';
import '../styles/homepage.css';
import {connect} from 'react-redux';
import params from '../styles/particleParams';
import Particles from 'react-particles-js';

import '../styles/homepage.css';
import resume from '../assets/resumeicon4.svg';
import meeting from '../assets/meeting.svg';
import interview from '../assets/interview.svg';
import decision from '../assets/envelope.svg';
import neurons from '../assets/neurons.png';
import linkedin from '../assets/linkedin.svg';
import facebook from '../assets/facebook.svg';
import gplus from '../assets/gplus.svg';

/**
<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>
from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a>
from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/icomoon" title="Icomoon">Icomoon</a>
from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is
licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

<div>Icons made by <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a>
from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by
<a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
**/

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
          <div className="welcomewords">
            <h1 className="title"><span>NEUROTECH</span>@<span>BERKELEY</span></h1>
            {description}
          </div>
          {particles}
        </div>

        <div className="simpleaboutpane staff events">
          <h3 className="homesubheading white">events</h3>
          <div className="staffcontent">
            <div className="staffmember event">
              <div className="eventsiconwrapper">
                <img className="eventsicon adjust-bottom" src={meeting} alt="Infosession"/>
              </div>
              <div className="staffinfo eventwrapper">
                Infosession - September 11th
                <div className="socialmedia eventsdescription">
                  Our first infosession will be at Wheeler Hall in room 224 at 8-9 PM.
                </div>
              </div>
            </div>
            <div className="staffmember event">
              <div className="eventsiconwrapper adjust-height">
                <img className="eventsicon" src={resume} alt="Infosession"/>
              </div>
              <div className="staffinfo eventwrapper">
                Application - Due Sept. 14th
                <div className="socialmedia eventsdescription">
                  Our application is closed, but please feel free to come by
                  next semester!
                </div>
              </div>
            </div>
            <div className="staffmember event">
              <div className="eventsiconwrapper">
                <img className="eventsicon" src={interview} alt="Infosession"/>
              </div>
              <div className="staffinfo eventwrapper">
                Group Interviews - TBD
                <div className="socialmedia eventsdescription">
                  An application is just not enough, and this is our way of getting to know you.
                </div>
              </div>
            </div>
            <div className="staffmember event">
              <div className="eventsiconwrapper">
                <img className="eventsicon" src={decision} alt="Infosession"/>
              </div>
              <div className="staffinfo eventwrapper">
                Decision Date
                <div className="socialmedia eventsdescription">
                  The decisions will be posted once interviews are done. Thank you for applying!
                </div>
              </div>
            </div>
          </div>
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
          <h3 className="homesubheading stafftitle">meet the staff</h3>
          <div className="staffcontent">
            <div className="staffmember aditya">
              <div className="staffinfo">
                Aditya - President
                <div className="socialmedia">
                  <a href="https://www.linkedin.com/"><img className="sm" src={linkedin} alt="in" /></a>
                  <a href="https://www.facebook.com/"><img className="sm" src={facebook} alt="fb" /></a>
                  <a href="https://plus.google.com/"><img className="sm" src={gplus} alt="gplus" /></a>
                </div>
              </div>
            </div>
            <div className="staffmember kayla">
              <div className="staffinfo">
                Kayla - Internal VP
                <div className="socialmedia">
                  <a href="https://www.linkedin.com/"><img className="sm" src={linkedin} alt="in" /></a>
                  <a href="https://www.facebook.com/"><img className="sm" src={facebook} alt="fb" /></a>
                  <a href="https://plus.google.com/"><img className="sm" src={gplus} alt="gplus" /></a>
                </div>
              </div>
            </div>
            <div className="staffmember mridula">
              <div className="staffinfo">
                Mridula - Treasurer
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

          </div>
        </div>

        <div className="simpleaboutpane footer">
          <div className="footercontent">
            <a href="https://www.ocf.berkeley.edu">
              <img className="ocf" src="https://www.ocf.berkeley.edu/hosting-logos/ocf-hosted-penguin.svg" alt="Hosted by the OCF" />
            </a>
            <div className="homewords footerwords">
              We are a student group acting independently of the University of California.
              We take full responsibility for our organization and this web site.
              Credits to <a className="footerlink" href="http://www.freepik.com" title="Freepik">Freepik, </a>
              <a className="footerlink" href="https://www.flaticon.com/authors/icomoon" title="Icomoon">Icomoon, </a>
              <a className="footerlink" href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy. </a>
              <a className="footerlink" href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"> CC 3.0 BY.</a>
            </div>
            <div className="homewords footerwords">© Neurotech at Berkeley 2018</div>
          </div>

        </div>

      </div>
    )
  }
}

export default connect(() => {return {}}, null)(HomePage);
