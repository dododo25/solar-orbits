import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, MoonOrbitBorderRadius} from '../Constants.js';

const Ganymede = props => {
  return (
    <Celestial radius={5} borderRadius={MoonOrbitBorderRadius} distance={props.distance} duration={Day * 7.1556} fill='#BDBDBD' onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Ganymede;