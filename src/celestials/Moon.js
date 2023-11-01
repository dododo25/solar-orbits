import './Celestial.css';

import Celestial from './Celestial.js';
import {Month, OrbitSelectorBuffer} from '../Constants.js';

const Moon = props => {
  const radius = 3;

  const view = (
    <svg className='d-block' width={radius * 2} height={radius * 2}>
      <circle cx={radius} cy={radius} r={radius} fill='#BDBDBD' />
    </svg>
  );

  return (
    <Celestial view={view} orbitRadius={props.orbitRadius} orbitSelectorBuffer={OrbitSelectorBuffer} shift={props.shift} duration={Month} onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Moon;