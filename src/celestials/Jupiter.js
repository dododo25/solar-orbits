import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const Jupiter = props => {
  const radius = 26;
  const duration = 11.86 * Year;

  const view = (
    <svg className='d-block flex-shrink-0' width={radius * 2} height={radius * 2} style={{animation: `${duration}s linear 0s spin-backward infinite`}}>
      <g style={{transformBox: 'fill-box', transformOrigin: 'center', transform: `rotate(${props.shift}deg)`}}>
        <circle cx={radius} cy={radius} r={radius} fill='#DEB887' />
        <ellipse cx='40' cy='40' rx='9' ry='5' fill='#8B0000' fillOpacity='0.6' />
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

export default Jupiter;