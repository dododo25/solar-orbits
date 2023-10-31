import './Celestial.css';

import Celestial from './Celestial.js';
import {OrbitBorderRadius, Year} from '../Constants.js';

const Mercury = props => {
  return (
    <Celestial radius={5} borderRadius={OrbitBorderRadius} distance={props.distance} duration={0.241 * Year} fill='#4E342E' onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Mercury;