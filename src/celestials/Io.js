import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, OrbitSelectorBuffer} from '../Constants.js';

const Io = props => {
  const radius = 3;

  const view = (
    <circle r={radius} fill='#FFF176' />
  );

  return (
    <Celestial id='Io' 
               view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={OrbitSelectorBuffer} 
               shift={props.shift} 
               duration={Day * 1.7627 / props.timeSpan} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Io;