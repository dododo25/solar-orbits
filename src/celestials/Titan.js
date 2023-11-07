import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, BigOrbitSelectorBuffer} from '../Constants.js';

const Titan = props => {
  const radius = 4;

  const view = (
    <svg className='d-block flex-shrink-0' width={radius * 2} height={radius * 2}>
      <circle cx={radius} cy={radius} r={radius} fill='#FFF176' />
    </svg>
  );

  return (
    <Celestial id='Titan' 
               view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={BigOrbitSelectorBuffer} 
               shift={props.shift} 
               duration={Day * 15.9454 / props.timeSpan} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Titan;