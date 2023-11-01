import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, OrbitSelectorBuffer} from '../Constants.js';

const Io = props => {
  const radius = 4;

  const view = (
    <svg className='d-block' width={radius * 2} height={radius * 2}>
      <circle cx={radius} cy={radius} r={radius} fill='#FFF176' />
    </svg>
  );

  return (
    <Celestial view={view} orbitRadius={props.orbitRadius} orbitSelectorBuffer={OrbitSelectorBuffer} shift={props.shift} duration={Day * 1.7627} onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Io;