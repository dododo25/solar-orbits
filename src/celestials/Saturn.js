import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const Saturn = props => {
  const svgSize = 100;
  const duration = 29.46 * Year;

  const view = (
    <svg className='d-block flex-shrink-0' width={svgSize} height={svgSize} style={{animation: `${duration}s linear 0s spin-backward infinite`}}>
      <g style={{transformBox: 'fill-box', transformOrigin: 'center', transform: `rotate(${props.shift}deg)`}}>
        <circle cx='50' cy='50' r='20' fill='#D2B48C' />
        <g transform='translate(10 10)'>
          <circle cx='40' cy='40' r='22' fill='transparent' strokeWidth='1' stroke='#9E9E9E' 
            transform='skewX(45) translate(-38 0)' />
          <circle cx='40' cy='40' r='24' fill='transparent' strokeWidth='0.5' stroke='#9E9E9E' 
            transform='skewX(45) translate(-38 0)' />
          <circle cx='40' cy='40' r='26' fill='transparent' strokeWidth='1.5' stroke='#9E9E9E' 
            transform='skewX(45) translate(-38 0)' />
        </g>
        <path d='M 50 30 A 20 20 0 0 1 70 50 L 33 50 L 40 32.6795  A 20 20 0 0 1 50 30' fill='#D2B48C' />
      </g>
    </svg>
  );

  return (
    <Celestial view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={BigOrbitSelectorBuffer} 
               shift={props.shift} 
               duration={duration} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Saturn;