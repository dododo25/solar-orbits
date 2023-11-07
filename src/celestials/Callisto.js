import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, OrbitSelectorBuffer} from '../Constants.js';

const Callisto = props => {
  const radius = 3;

  const view = (
    <svg className='d-block flex-shrink-0' width={radius * 2} height={radius * 2}>
      <circle cx={radius} cy={radius} r={radius} fill='#9575CD' />
    </svg>
  );

  return (
    <Celestial id='Callisto' 
               view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={OrbitSelectorBuffer} 
               shift={props.shift} 
               duration={Day * 16.690 / props.timeSpan} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Callisto;