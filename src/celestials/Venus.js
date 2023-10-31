import './Celestial.css';

import Celestial from './Celestial.js';
import {OrbitBorderRadius, Year} from './Constants.js';

const Venus = props => {
  return (
    <Celestial radius={9} borderRadius={OrbitBorderRadius} distance={props.distance} duration={0.615 * Year} fill='#F5DEB3' onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Venus;