import { useState } from 'react';

import './Celestial.css';

import {Year, OrbitBorderRadius} from '../Constants.js';
import process from './ElementProcessor';

const radius = 30;
const duration = 11.86 * Year;

const Jupiter = props => {
  const distance = props.distance;
  const shift = props.shift ? props.shift : 0;

  const orbitAnimation = `${duration}s linear 0s spin infinite`;
  const planetAnimation = `${duration}s linear 0s spin-backward infinite`;
  const children = process(props.children);

  const [orbitBorderColor, setOrbitBorderColor] = useState('transparent');

  const onMouseEnter = () => setOrbitBorderColor('url(#grad2)');
  const onMouseLeave = () => setOrbitBorderColor('transparent');

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='w-0 d-flex justify-content-center align-items-center'>
        <div className='pe-none'>
          <svg className='d-block' width={(distance + OrbitBorderRadius) * 2} height={(distance + OrbitBorderRadius) * 2}>
            <g fillRule='evenodd' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={props.onClick}>
              <path className='content pe-auto'
                    d={`M 0 ${distance + OrbitBorderRadius} A ${distance + OrbitBorderRadius} ${distance + OrbitBorderRadius} 0 0 1 ${(distance + OrbitBorderRadius) * 2} ${distance + OrbitBorderRadius} A ${distance + OrbitBorderRadius} ${distance + OrbitBorderRadius} 0 0 1 0 ${distance + OrbitBorderRadius} z
                        M ${OrbitBorderRadius * 2} ${distance + OrbitBorderRadius} A ${distance - OrbitBorderRadius} ${distance - OrbitBorderRadius} 0 0 1 ${distance * 2} ${distance + OrbitBorderRadius} A ${distance - OrbitBorderRadius} ${distance - OrbitBorderRadius} 0 0 1 ${OrbitBorderRadius * 2} ${distance + OrbitBorderRadius} z`}
                    fill={orbitBorderColor} />
            </g>
            <circle className='orbit' cx='50%' cy='50%' r={distance} stroke='#FAFAFA' strokeWidth='1' strokeDasharray='12' fill='transparent' />
          </svg>
        </div>
      </div>
      <div className='w-0 d-flex align-items-center justify-content-center pe-none' style={{transform: `rotate(${shift}deg)`}}>
        <div className='d-flex align-items-center flex-shrink-0 pe-none' style={{width: distance * 2, animation: orbitAnimation}}>
          <div className='w-0 d-flex align-items-center justify-content-center pe-auto'>
            {children}
          </div>
          <div className='celestial w-0 d-flex align-items-center justify-content-center' style={{animation: planetAnimation}}>
            <div>
              <svg className='d-block' width={radius * 2} height={radius * 2}>
                <circle cx={radius} cy={radius} r={radius} fill='#DEB887' />
                <ellipse cx='40' cy='40' rx='9' ry='5' fill='#8B0000' fillOpacity='0.6' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jupiter;