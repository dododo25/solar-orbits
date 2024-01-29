import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, BigOrbitSelectorBuffer} from '../Constants.js';

const Triton = props => {
  const radius = 2;

  const view = (
    <circle r={radius} fill='#BDBDBD' />
  );

  return (
    <Celestial id='Triton' 
               view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={BigOrbitSelectorBuffer} 
               shift={props.shift} 
               duration={Day * -5.8769 / props.timeSpan} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Triton;