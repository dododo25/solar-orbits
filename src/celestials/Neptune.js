import './Celestial.css';

import Celestial from './Celestial.js';
import {OrbitBorderRadius, Year} from '../Constants.js';

const Neptune = props => {
  return (
    <Celestial radius={18} borderRadius={OrbitBorderRadius} distance={props.distance} duration={164.79 * Year} fill='#3949AB' onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Neptune;