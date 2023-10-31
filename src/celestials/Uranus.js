import './Celestial.css';

import Celestial from './Celestial.js';
import {OrbitBorderRadius, Year} from './Constants.js';

const Uranus = props => {
  return (
    <Celestial radius={22} borderRadius={OrbitBorderRadius} distance={props.distance} duration={84.01 * Year} fill='#66BB6A' onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Uranus;