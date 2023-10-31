import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, MoonOrbitBorderRadius} from '../Constants.js';

const Europa = props => {
  return (
    <Celestial radius={4} borderRadius={MoonOrbitBorderRadius} distance={props.distance} duration={Day * 3.5255} fill='#BDBDBD' onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Europa;