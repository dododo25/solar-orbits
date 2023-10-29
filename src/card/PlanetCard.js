import { useState } from 'react';

import './CelestialCard.css';

const PlanetCard = props => {
  const [isMetric, setIsMetric] = useState(true);

  const metricParameters = {
    radius: '24,622 km, 3.856 Earths',
    mass: (<span>1.02413x10<sup>26</sup> kg, 17.147 Earths</span>),
    volume: (<span>6.253x10<sup>13</sup> km^3, 57.74 Earths</span>),
    dAphelion: '30.33 AU - 4.54 billion km',
    dPerihelion: '29.81 AU - 4.46 billion km',
    dMean: '30.07 AU - 4.50 billion km',
    aTilt: '28.32°',
    dayLength: '16 h 6 min 36 s',
    yearLength: '164.8 Earth`s years (60,195 Earth`s days)',
    temperature: '72 K - -201 °C',
    moonsCount: 14
  };

  const imperialParameters = {
    radius: '15,388.75 miles, 3.856 Earths',
    mass: (<span>1.13x10<sup>23</sup> lb, 17.147 Earths</span>),
    volume: (<span>2.08433x10<sup>15</sup> cu ft, 57.74 Earths</span>),
    dAphelion: '30.33 AU - 2832.7 billion miles',
    dPerihelion: '29.81 AU - 2778.2 billion miles',
    dMean: '30.07 AU - 2805.5 billion miles',
    aTilt: '28.32°',
    dayLength: '16 h 6 min 36 s',
    yearLength: '164.8 Earth`s years (60,195 Earth`s days)',
    temperature: '72 K - -330 F',
    moonsCount: 14
  };

  let params = isMetric ? metricParameters : imperialParameters;

  return (
    <div className='celestial-card font-light d-flex justify-content-end'>
      <div className='vw-50 d-flex flex-shrink-0 justify-content-start align-items-start'>
        <div>
          <div className='vh-100 d-flex flex-column p-3' style={{backgroundColor: '#101010', borderRight: '2px solid #FAFAFA'}}>
            <div className='d-flex justify-content-center'>
              <img src='https://nssdc.gsfc.nasa.gov/planetary/image/neptune.jpg' alt='Neptune' width={360} />
            </div>
            <h1 className='text-white d-flex justify-content-center mb-3'>Neptune ♆</h1>
            <h5 className='text-white'><b>Radius: </b>{params.radius}</h5>
            <h5 className='text-white'><b>Mass: </b>{params.mass}</h5>
            <h5 className='text-white'><b>Volume: </b>{params.volume}</h5>
            <div className='d-flex flex-row'>
              <h5 className='text-white me-1'><b>Distance from Sun:</b></h5>
              <div>
                <h5 className='text-white'><b>Aphelion: </b>{params.dAphelion}</h5>
                <h5 className='text-white'><b>Perihelion: </b>{params.dPerihelion}</h5>
                <h5 className='text-white'><b>Mean: </b>{params.dMean}</h5>
              </div>
            </div>
            <h5 className='text-white'><b>Axis tilt: </b>{params.aTilt}</h5>
            <h5 className='text-white'><b>Length of day: </b>{params.dayLength}</h5>
            <h5 className='text-white'><b>Length of year: </b>{params.yearLength}</h5>
            <h5 className='text-white'><b>Temperature: </b>{params.temperature}</h5>
            <h5 className='text-white'><b>Number of moons: </b>{params.moonsCount}</h5>
            <h5 className='text-white'><a href='#'>Link</a> to the Wikipedia page</h5>
            <span className='no-print pe-none user-select-none' style={{color: '#101010'}}>------------------------------------------------------------------------------</span>
            <div className='text-white d-flex align-items-end flex-grow-1'>
              <h6>Units of measure: 
                <button className='btn btn-link' onClick={() => setIsMetric(true)}><h6>{`metric${isMetric ? ' (selected)' : ''}`}</h6></button>
                <button className='btn btn-link' onClick={() => setIsMetric(false)}><h6>{`imperial${isMetric ? '' : ' (selected)'}`}</h6></button>
              </h6>
            </div>
          </div>
        </div>
        <div className='w-0'>
          <div className='d-flex justify-content-end'>
            <div className='m-4'>
              <button type='button' className='btn-close btn-close-white' aria-label='Close'></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
