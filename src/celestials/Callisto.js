import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, OrbitSelectorBuffer} from '../Constants.js';

const Callisto = props => {
  const radius = 3;

  const view = (
    <svg className='d-block' width={radius * 2} height={radius * 2}>
      <circle cx={radius} cy={radius} r={radius} fill='#9575CD' />
    </svg>
  );

  return (
    <Celestial view={view} orbitRadius={props.orbitRadius} orbitSelectorBuffer={OrbitSelectorBuffer} shift={props.shift} duration={Day * 16.690} onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Callisto;