import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const Earth = props => {
  const radius = 9;

  const view = (
    <circle r={radius} fill='#0000FF' />
  );

  return (
    <Celestial id='Earth' 
               view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={BigOrbitSelectorBuffer}
               shift={props.shift} 
               duration={Year / props.timeSpan} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Earth;