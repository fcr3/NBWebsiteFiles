import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/navbar.css';
import {Link} from 'react-router-dom';
import Collapsible from 'react-collapsible';
import logo from '../imgs/logo.png';
import menu from '../imgs/menu.svg';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      active: false,
      screenWidth: window.innerWidth
    }
  }

  componentDidMount() {
    window.onresize = () => {
      this.setState({
        active: this.state.active,
        screenWidth: window.innerWidth,
      });
    };
  }

  toggleMenu(e) {
    this.setState({...this.state, active: !this.state.active});
  }

  render() {

    var link = (
      <div className="links">
        <Link to="/" className="link">Home</Link>
        <Link to="/decal" className="link">Decal</Link>
        <Link to="/posts" className="link">Posts</Link>
        <a className="link" href="https://groups.google.com/a/lists.berkeley.edu/forum/#!forum/neurotech-berkeley/join">
          Join Mailing List
        </a>
        <a className="link" href="https://github.com/NeurotechBerkeley/">Github</a>
        <a className="link" href="https://www.facebook.com/neurotechberkeley/">Facebook</a>
      </div>
    );

    if (this.state.screenWidth <= 575) {
      link = (
        <Collapsible lazyRender={true} open={this.state.active} easing="ease-out">
          {link}
        </Collapsible>
      );
    }

    return (
      <div className="navbar" style={{zIndex: 5}}>
        <div className="navWrapper" style={{zIndex: 5}}>
          <div className="topBar">
            <div className="menuButton">
              <img src={menu} alt="Menu" onClick={this.toggleMenu} />
            </div>
            <div className="logo">
              <Link to="/"><img src={logo} alt="Home" /></Link>
            </div>
          </div>
          {link}
        </div>
      </div>
    );
  }
}

export default connect(() => {return {}}, null)(Navbar);
