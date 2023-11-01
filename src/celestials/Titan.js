import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, BigOrbitSelectorBuffer} from '../Constants.js';

const Titan = props => {
  const radius = 5;

  const view = (
    <svg className='d-block' width={radius * 2} height={radius * 2}>
      <circle cx={radius} cy={radius} r={radius} fill='#FFF176' />
    </svg>
  );

  return (
    <Celestial view={view} orbitRadius={props.orbitRadius} orbitSelectorBuffer={BigOrbitSelectorBuffer} shift={props.shift} duration={Day * 15.9454} onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Titan;