import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const Mars = props => {
  const radius = 5;

  const view = (
    <svg className='d-block flex-shrink-0' width={radius * 2} height={radius * 2}>
      <circle cx={radius} cy={radius} r={radius} fill='#D84315' />
    </svg>
  );

  return (
    <Celestial id='Mars' 
               view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={BigOrbitSelectorBuffer} 
               shift={props.shift} 
               duration={1.88 * Year / props.timeSpan}
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Mars;