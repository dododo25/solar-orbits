import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const Uranus = props => {
  const radius = 22;
  const svgSize = 66;
  const duration = 84.01 * Year;

  const view = (
    <svg className='d-block' width={svgSize} height={svgSize} style={{animation: `${duration}s linear 0s spin-backward infinite`}}>
      <g style={{transformBox: 'fill-box', transformOrigin: 'center', transform: `rotate(${props.shift}deg)`}}>
        <circle cx={svgSize / 2} cy={svgSize / 2} r={radius} fill='#66BB6A' />
        <g transform='rotate(9) translate(30 -16)'>
            <g transform='scale(0.2 1.3)'>
                <circle cx={svgSize / 2} cy={svgSize / 2} r={radius + 2} fill='transparent' stroke='#BDBDBD' />
            </g>
        </g>
        <path d='M 31 54.9089 A 22 22 0 0 1 33 11 z' fill='#66BB6A' />
      </g>
    </svg>
  );

  return (
    <Celestial view={view} orbitRadius={props.orbitRadius} orbitSelectorBuffer={BigOrbitSelectorBuffer} shift={props.shift} duration={84.01 * Year} onClick={props.onClick}>
      {props.children}
    </Celestial>
  );
};

export default Uranus;