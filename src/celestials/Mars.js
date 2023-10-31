import './Celestial.css';

import Celestial from './Celestial.js';
import {OrbitBorderRadius, Year} from '../Constants.js';

const Mars = props => {
  return (
    <Celestial radius={6} borderRadius={OrbitBorderRadius} distance={props.distance} duration={1.88 * Year} fill='#D84315' onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Mars;