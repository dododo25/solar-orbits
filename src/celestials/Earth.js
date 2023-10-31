import './Celestial.css';

import Celestial from './Celestial.js';
import {OrbitBorderRadius, Year} from '../Constants.js';

const Earth = props => {
  return (
    <Celestial radius={10} borderRadius={OrbitBorderRadius} distance={props.distance} duration={Year} fill='#0000FF' onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Earth;