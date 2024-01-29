import './PickAnotherDevice.css';

const PickAnotherDevice = () => {
  return (
    <div className='PickAnotherDevice d-flex flex-column justify-content-center font-light text-white vw-100 vh-100'>
      <span className='mx-auto'>It seems like that the screen of your device is not large enough (&lt; 768px).</span>
      <span className='mx-auto'>Please, use another device.</span>
    </div>
  );
}

export default PickAnotherDevice;
