import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const Uranus = props => {
  const radius = 18;
  const svgSize = 66;
  const duration = 84.01 * Year;

  const view = (
    <svg className='d-block flex-shrink-0' width={svgSize} height={svgSize} style={{animation: `${duration}s linear 0s spin-backward infinite`}}>
      <g style={{transformBox: 'fill-box', transformOrigin: 'center', transform: `rotate(${props.shift}deg)`}}>
        <circle cx='33' cy='33' r='18' fill='#66BB6A' />
        <g transform='rotate(9) translate(30 -16)'>
            <g transform='scale(0.2 1.3)'>
                <circle cx='33' cy='33' r='20' fill='transparent' stroke='#BDBDBD' />
            </g>
        </g>
        <path d='M 31 50.8885 A 18 18 0 0 1 33 15 z' fill='#66BB6A' />
      </g>
    </svg>
  );

  return (
    <Celestial view={view} 
               orbitRadius={props.orbitRadius} 
               orbitSelectorBuffer={BigOrbitSelectorBuffer} 
               shift={props.shift} 
               duration={84.01 * Year} 
               children={props.children} 
               onClick={props.onClick} />
  );
};

export default Uranus;