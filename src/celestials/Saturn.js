import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const Saturn = props => {
  const radius = 26;
  const svgSize = 100;
  const duration = 29.46 * Year;

  const view = (
    <svg className='d-block' width={svgSize} height={svgSize} viewBox='-5 -5 90 90' style={{animation: `${duration}s linear 0s spin-backward infinite`}}>
      <g style={{transformBox: 'fill-box', transformOrigin: 'center', transform: `rotate(${props.shift}deg)`}}>
        <circle cx='40' cy='40' r={radius} fill='#D2B48C' />
        <g transform='translate(0 -3)'>
          <circle cx='40' cy='40' r='22' fill='transparent' strokeWidth='1' stroke='#9E9E9E' 
            transform='skewX(45) translate(-38 0)' />
          <circle cx='40' cy='40' r='24' fill='transparent' strokeWidth='0.5' stroke='#9E9E9E' 
            transform='skewX(45) translate(-38 0)' />
          <circle cx='40' cy='40' r='26' fill='transparent' strokeWidth='1.5' stroke='#9E9E9E' 
            transform='skewX(45) translate(-38 0)' />
        </g>
        <path d='M 40 14 A 26 26 0 0 1 66 40 L 26 40 L 24 19.5 A 26 26 0 0 1 40 14' fill='#D2B48C' />
      </g>
    </svg>
  );

  return (
    <Celestial view={view} orbitRadius={props.orbitRadius}orbitSelectorBuffer={BigOrbitSelectorBuffer} shift={props.shift} duration={duration} onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Saturn;