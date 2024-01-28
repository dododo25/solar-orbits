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
        ref.current.setAttribute('r', (radius + borderRadius) * props.scale);

        return;
      }
    
      ref.current.setAttribute('r', (radius + borderRadius * timePassed / (animationTime * 1000)) * props.scale);
    }, animationTime);
  };

  const onMouseLeave = async () => {
    const start = Date.now();

    const timer = setInterval(() => {
      const timePassed = Date.now() - start;
    
      if (timePassed >= animationTime * 1000) {
        clearInterval(timer);
        ref.current.setAttribute('r', radius * props.scale);

        return;
      }
    
      ref.current.setAttribute('r', (radius + borderRadius * (1 - timePassed / (animationTime * 1000))) * props.scale);
    }, animationTime);
  };

  return (
    <g>
      <g transform={`scale(${props.scale})`}>
        <g transform={`translate(${props.distance}, ${props.distance})`}>
          {children}
        </g>
      </g>
      <g transform={`translate(${props.distance * props.scale}, ${props.distance * props.scale})`}>
        <circle ref={ref} className='content' r={radius * props.scale} fill='#FBC02D' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={props.onClick} />
      </g>
    </g>
  );
};

export default Sun;