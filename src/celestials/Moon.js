import './Celestial.css';

import Celestial from './Celestial.js';
import {Month, OrbitSelectorBuffer} from '../Constants.js';

const Moon = props => {
  const radius = 2;

  const view = (
    <circle r={radius} fill='#BDBDBD' />
  );

  return (
    <Celestial id='Moon' 
               view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={OrbitSelectorBuffer} 
               shift={props.shift} 
               duration={Month / props.timeSpan} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Moon;