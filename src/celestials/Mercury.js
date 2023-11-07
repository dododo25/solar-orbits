import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const Mercury = props => {
  const radius = 4;

  const view = (
    <svg className='d-block flex-shrink-0' width={radius * 2} height={radius * 2}>
      <circle cx={radius} cy={radius} r={radius} fill='#4E342E' />
    </svg>
  );

  return (
    <Celestial id='Mercury' 
               view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={BigOrbitSelectorBuffer} 
               shift={props.shift} 
               duration={0.241 * Year / props.timeSpan} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Mercury;