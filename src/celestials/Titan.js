import './Celestial.css';

import Celestial from './Celestial.js';
import {Day, BigOrbitSelectorBuffer} from '../Constants.js';

const Titan = props => {
  const radius = 4;

  const view = (
    <circle r={radius} fill='#FFF176' />
  );

  return (
    <Celestial id='Titan' 
               view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={BigOrbitSelectorBuffer} 
               shift={props.shift} 
               duration={Day * 15.9454 / props.timeSpan} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Titan;