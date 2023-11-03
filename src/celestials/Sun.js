import { useRef } from 'react';

import './Celestial.css';

import process from './ElementProcessor';

const Sun = props => {
  const ref = useRef(null);

  const radius = 72;
  const borderRadius = 4;
  const animationTime = 0.2;
  
  const children = process(props.children);

  const onMouseEnter = async () => {
    const start = Date.now();

    const timer = setInterval(() => {
      const timePassed = Date.now() - start;
    
      if (timePassed >= animationTime * 1000) {
        clearInterval(timer);
        ref.current.setAttribute('r', radius + borderRadius);

        return;
      }
    
      ref.current.setAttribute('r', radius + borderRadius * timePassed / (animationTime * 1000));
    }, animationTime);
  };

  const onMouseLeave = async () => {
    const start = Date.now();

    const timer = setInterval(() => {
      const timePassed = Date.now() - start;
    
      if (timePassed >= animationTime * 1000) {
        clearInterval(timer);
        ref.current.setAttribute('r', radius);

        return;
      }
    
      ref.current.setAttribute('r', radius + borderRadius * (1 - timePassed / (animationTime * 1000)));
    }, animationTime);
  };

  return (
    <div className='d-flex'>
      {children}
      <div className='sun w-0 d-flex align-items-center justify-content-center'>
        <svg className='d-block flex-shrink-0' width={(radius + borderRadius) * 2} height={(radius + borderRadius) * 2}>
          <circle ref={ref} className='content' cx='50%' cy='50%' r={radius} fill='#FBC02D' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={props.onClick} />
        </svg>
      </div>
    </div>
  );
};

export default Sun;