import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, MoonOrbitBorderRadius} from '../Constants.js';

const Triton = props => {
  return (
    <Celestial radius={2} borderRadius={MoonOrbitBorderRadius} distance={props.distance} duration={Day * -5.8769} fill='#BDBDBD' onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Triton;