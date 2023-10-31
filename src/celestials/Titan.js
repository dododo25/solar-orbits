import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, MoonOrbitBorderRadius} from '../Constants.js';

const Titan = props => {
  return (
    <Celestial radius={5} borderRadius={MoonOrbitBorderRadius} distance={props.distance} duration={Day * 15.9454} fill='#FFF176' onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Titan;