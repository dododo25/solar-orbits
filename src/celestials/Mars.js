import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const Mars = props => {
  const radius = 6;

  const view = (
    <svg className='d-block' width={radius * 2} height={radius * 2}>
      <circle cx={radius} cy={radius} r={radius} fill='#D84315' />
    </svg>
  );

  return (
    <Celestial view={view} orbitRadius={props.orbitRadius} orbitSelectorBuffer={BigOrbitSelectorBuffer} shift={props.shift} duration={1.88 * Year} onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Mars;