import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, OrbitSelectorBuffer} from '../Constants.js';

const Europa = props => {
  const radius = 3;

  const view = (
    <circle r={radius} fill='#BDBDBD' />
  );

  return (
    <Celestial id='Europa' 
               view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={OrbitSelectorBuffer} 
               shift={props.shift} 
               duration={Day * 3.5255 / props.timeSpan} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Europa;