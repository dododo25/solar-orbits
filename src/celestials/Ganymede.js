import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, OrbitSelectorBuffer} from '../Constants.js';

const Ganymede = props => {
  const radius = 5;

  const view = (
    <svg className='d-block' width={radius * 2} height={radius * 2}>
      <circle cx={radius} cy={radius} r={radius} fill='#BDBDBD' />
    </svg>
  );

  return (
    <Celestial view={view} orbitRadius={props.orbitRadius} orbitSelectorBuffer={OrbitSelectorBuffer} shift={props.shift} duration={Day * 7.1556} onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Ganymede;