import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const Earth = props => {
  const radius = 10;

  const view = (
    <svg className='d-block' width={radius * 2} height={radius * 2}>
      <circle cx={radius} cy={radius} r={radius} fill='#0000FF' />
    </svg>
  );

  return (
    <Celestial view={view} orbitRadius={props.orbitRadius} orbitSelectorBuffer={BigOrbitSelectorBuffer} shift={props.shift} duration={Year} onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Earth;