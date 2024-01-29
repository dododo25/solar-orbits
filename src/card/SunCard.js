import './CelestialCard.css';
import CardTemplate from './CelestialCardTemplate.js';

const SunCard = props => {
  return (
    <CardTemplate onClose={props.onClose}>
      <div className='d-flex justify-content-center'>
        <img src='https://nssdc.gsfc.nasa.gov/planetary/banner/sun.gif' width='360' alt='Sun' />
      </div>
      <h1 className='d-flex justify-content-center mb-3'>Sun ☉</h1>
      <h5><b>Radius: </b>695,700 km, 109 Earths</h5>
      <h5><b>Mass: </b>1.9885x10<sup>32</sup> kg, 333,000 Earths</h5>
      <h5><b>Volume: </b>1.412x10<sup>19</sup> km<sup>3</sup>, 1,304,000 Earths</h5>
      <h5><b>Gravity: </b>28G</h5>
      <h5><b>Axis rotation period: </b>609.12 h</h5>
      <div className='d-flex flex-row'>
        <h5 className='me-1'><b>Temperature:</b></h5>
        <div>
          <h5><b>Surface: </b>5,772 K</h5>
          <h5><b>Center: </b>15,710,000 K</h5>
        </div>
      </div>
      <h5><a href='https://en.wikipedia.org/wiki/Sun'>Link</a> to the Wikipedia page.</h5>
    </CardTemplate>
  );
};

export default SunCard;
