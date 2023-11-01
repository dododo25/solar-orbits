import { useState } from 'react';

import './CelestialCard.css';

const CardTemplate = props => {
  const [hidden, setHidden] = useState(false);

  const onAnimationEnd = e => {
    if (e.animationName === 'card-hide') {
      props.onClose();
    }
  };

  return (
    <div className={`celestial-card${hidden ? ' hide' : ''} vh-100 font-light d-flex`} onAnimationEnd={onAnimationEnd}>
      <div className='w-0'>
        <div className='text-white p-3'>
            {props.children}
        </div>
      </div>
      <div className='w-0'>
        <div className='d-flex justify-content-end p-3'>
          <button type='button' className='btn-close btn-close-white' aria-label='Close' onClick={() => setHidden(true)}></button>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
