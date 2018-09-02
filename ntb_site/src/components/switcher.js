import React from 'react';
import { spring, AnimatedSwitch } from 'react-router-transition';
import {Route} from 'react-router-dom';
import '../styles/switcher.css';

import HomePage from './homepage';

function mapStyles(styles) {
  return {
    opacity: `${styles.opacity}`,
  };
}

function bounce(val) {
  return spring(val, {stiffness: 330,damping: 30,});
}

const pageTransitions = {
  atEnter: {
    opacity: 0,
  },
  atLeave: {
    opacity: bounce(0),
  },
  atActive: {
    opacity: 1,
  },
};

const Switcher = () => (
  <AnimatedSwitch
    {...pageTransitions}
    mapStyles={mapStyles}
    className="switch-wrapper"
  >
    <Route exact path="/" component={HomePage} />
  </AnimatedSwitch>
);

export default Switcher;
