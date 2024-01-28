import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, OrbitSelectorBuffer} from '../Constants.js';

const Ganymede = props => {
  const radius = 4;

  const view = (
    <circle r={radius} fill='#BDBDBD' />
  );

  return (
    <Celestial id='Ganymede' 
               view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={OrbitSelectorBuffer} 
               shift={props.shift} 
               duration={Day * 7.1556 / props.timeSpan} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Ganymede;