import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const Mercury = props => {
  const radius = 4;

  const view = (
    <circle r={radius} fill='#4E342E' />
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