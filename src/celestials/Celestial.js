import { useRef } from 'react';

import './Celestial.css';

import process from './ElementProcessor.js';

const Celestial = props => {
  const ref = useRef(null);

  const animationTime = 0.2;
  const strokeWidth = 0.5;
  const strokeWidthExpand = 2;

  const orbitRadius = props.orbitRadius;
  const orbitSelectorBuffer = props.orbitSelectorBuffer;

  const shift = props.shift ? props.shift : 0;

  const animation = `${Math.abs(props.duration)}s linear 0s ${props.duration < 0 ? 'spin-backward' : 'spin'} infinite`;
  const children = process(props.children);

  const onMouseEnter = async () => {
    const start = Date.now();

    const timer = setInterval(() => {
      const timePassed = Date.now() - start;
    
      if (timePassed >= animationTime * 1000) {
        clearInterval(timer);
        ref.current.setAttribute('stroke-width', strokeWidth + strokeWidthExpand);

        return;
      }
    
      ref.current.setAttribute('stroke-width', strokeWidth + strokeWidthExpand * timePassed / (animationTime * 1000));
    }, animationTime);
  };

  const onMouseLeave = async () => {
    const start = Date.now();

    const timer = setInterval(() => {
      const timePassed = Date.now() - start;
    
      if (timePassed >= animationTime * 1000) {
        clearInterval(timer);
        ref.current.setAttribute('stroke-width', strokeWidth);

        return;
      }
    
      ref.current.setAttribute('stroke-width', strokeWidth + strokeWidthExpand * (1 - timePassed / (animationTime * 1000)));
    }, animationTime);
  };

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='w-0 d-flex justify-content-center align-items-center'>
        <div className='pe-none'>
          <svg className='d-block' width={(orbitRadius + orbitSelectorBuffer) * 2} height={(orbitRadius + orbitSelectorBuffer) * 2}>
            <g fillRule='evenodd' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={props.onClick}>
              <path className='content pe-auto'
                    d={`M 0 ${orbitRadius + orbitSelectorBuffer} A ${orbitRadius + orbitSelectorBuffer} ${orbitRadius + orbitSelectorBuffer} 0 0 1 ${(orbitRadius + orbitSelectorBuffer) * 2} ${orbitRadius + orbitSelectorBuffer} A ${orbitRadius + orbitSelectorBuffer} ${orbitRadius + orbitSelectorBuffer} 0 0 1 0 ${orbitRadius + orbitSelectorBuffer} z
                        M ${orbitSelectorBuffer * 2} ${orbitRadius + orbitSelectorBuffer} A ${orbitRadius - orbitSelectorBuffer} ${orbitRadius - orbitSelectorBuffer} 0 0 1 ${orbitRadius * 2} ${orbitRadius + orbitSelectorBuffer} A ${orbitRadius - orbitSelectorBuffer} ${orbitRadius - orbitSelectorBuffer} 0 0 1 ${orbitSelectorBuffer * 2} ${orbitRadius + orbitSelectorBuffer} z`}
                    fill='transparent' />
            </g>
            <circle ref={ref} className='orbit' cx='50%' cy='50%' r={orbitRadius} stroke='#FAFAFA' strokeWidth={strokeWidth} strokeDasharray='12' fill='transparent' />
          </svg>
        </div>
      </div>
      <div className='w-0 d-flex align-items-center justify-content-center pe-none' style={{transform: `rotate(-${shift}deg)`}}>
        <div className='d-flex justify-content-end align-items-center flex-shrink-0' style={{width: orbitRadius * 2, animation: animation}}>
          <div className='w-0 d-flex align-items-center justify-content-center pe-auto'>
            {children}
          </div>
          <div className='celestial w-0 d-flex align-items-center justify-content-center'>
            <div>
                {props.view}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Celestial;