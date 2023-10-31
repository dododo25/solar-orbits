import { useState } from 'react';

import './Celestial.css';

import process from '../ElementProcessor.js';

const Celestial = props => {
  const distance = props.distance;
  const radius = props.radius;
  const borderRadius = props.borderRadius;
  const shift = props.shift ? props.shift : 0;

  const animation = `${Math.abs(props.duration)}s linear 0s ${props.duration < 0 ? 'spin-backward' : 'spin'} infinite`;
  const children = process(props.children);

  const [orbitBorderColor, setOrbitBorderColor] = useState('transparent');

  const onMouseEnter = () => setOrbitBorderColor('url(#grad2)');
  const onMouseLeave = () => setOrbitBorderColor('transparent');

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='w-0 d-flex justify-content-center align-items-center'>
        <div className='pe-none'>
          <svg className='d-block' width={(distance + borderRadius) * 2} height={(distance + borderRadius) * 2}>
            <g fillRule='evenodd' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={props.onClick}>
              <path className='content pe-auto'
                    d={`M 0 ${distance + borderRadius} A ${distance + borderRadius} ${distance + borderRadius} 0 0 1 ${(distance + borderRadius) * 2} ${distance + borderRadius} A ${distance + borderRadius} ${distance + borderRadius} 0 0 1 0 ${distance + borderRadius} z
                        M ${borderRadius * 2} ${distance + borderRadius} A ${distance - borderRadius} ${distance - borderRadius} 0 0 1 ${distance * 2} ${distance + borderRadius} A ${distance - borderRadius} ${distance - borderRadius} 0 0 1 ${borderRadius * 2} ${distance + borderRadius} z`}
                    fill={orbitBorderColor} />
            </g>
            <circle className='orbit' cx='50%' cy='50%' r={distance} stroke='#FAFAFA' strokeWidth='1' strokeDasharray='12' fill='transparent' />
          </svg>
        </div>
      </div>
      <div className='w-0 d-flex align-items-center justify-content-center pe-none' style={{transform: `rotate(${shift}deg)`}}>
        <div className='d-flex align-items-center flex-shrink-0' style={{width: distance * 2, animation: animation}}>
          <div className='w-0 d-flex align-items-center justify-content-center pe-auto'>
            {children}
          </div>
          <div className='celestial w-0 d-flex align-items-center justify-content-center'>
            <div>
              <svg className='d-block' width={radius * 2} height={radius * 2}>
                <circle cx={radius} cy={radius} r={radius} fill={props.fill} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Celestial;