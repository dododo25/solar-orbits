import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, BigOrbitSelectorBuffer} from '../Constants.js';

const Triton = props => {
  const radius = 2;

  const view = (
    <svg className='d-block flex-shrink-0' width={radius * 2} height={radius * 2}>
      <circle cx={radius} cy={radius} r={radius} fill='#BDBDBD' />
    </svg>
  );

  return (
    <Celestial view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={BigOrbitSelectorBuffer} 
               shift={props.shift} 
               duration={Day * -5.8769} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Triton;