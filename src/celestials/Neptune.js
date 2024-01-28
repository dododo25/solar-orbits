import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const Neptune = props => {
  const radius = 16;

  const view = (
    <circle r={radius} fill='#3949AB' />
  );

  return (
    <Celestial id='Neptune' 
               view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={BigOrbitSelectorBuffer} 
               shift={props.shift} 
               duration={164.79 * Year / props.timeSpan} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Neptune;