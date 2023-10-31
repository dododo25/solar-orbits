import './CelestialCard.css';

const CardTemplate = props => {
  return (
    <div className='celestial-card vh-100 font-light d-flex flex-shrink-0'>
      <div className='w-0'>
        <div className='text-white p-3'>
            {props.children}
        </div>
      </div>
      <div className='w-0'>
        <div className='d-flex justify-content-end p-3'>
          <button type='button' className='btn-close btn-close-white' aria-label='Close' onClick={props.onClose}></button>
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
