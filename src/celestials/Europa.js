import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, OrbitSelectorBuffer} from '../Constants.js';

const Europa = props => {
  const radius = 3;

  const view = (
    <svg className='d-block flex-shrink-0' width={radius * 2} height={radius * 2}>
      <circle cx={radius} cy={radius} r={radius} fill='#BDBDBD' />
    </svg>
  );

  return (
    <Celestial view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={OrbitSelectorBuffer} 
               shift={props.shift} 
               duration={Day * 3.5255} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Europa;