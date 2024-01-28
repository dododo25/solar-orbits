import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const Venus = props => {
  const radius = 8;

  const view = (
    <circle r={radius} fill='#F5DEB3' />
  );

  return (
    <Celestial id='Venus' 
               view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={BigOrbitSelectorBuffer} 
               shift={props.shift} 
               duration={0.615 * Year / props.timeSpan} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Venus;