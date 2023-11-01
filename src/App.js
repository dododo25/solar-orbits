import { useState } from 'react';

import './App.css';

import Background from './Background.js';

import Callisto from './celestials/Callisto.js';
import Earth    from './celestials/Earth.js';
import Europa   from './celestials/Europa.js';
import Ganymede from './celestials/Ganymede.js';
import Io       from './celestials/Io.js';
import Jupiter  from './celestials/Jupiter.js';
import Mars     from './celestials/Mars.js';
import Mercury  from './celestials/Mercury.js';
import Moon     from './celestials/Moon.js';
import Neptune  from './celestials/Neptune.js';
import Saturn   from './celestials/Saturn.js';
import Sun      from './celestials/Sun.js';
import Titan    from './celestials/Titan.js';
import Triton   from './celestials/Triton.js';
import Uranus   from './celestials/Uranus.js';
import Venus    from './celestials/Venus.js';

import EarthCard    from './card/EarthCard.js';
import JupiterCard  from './card/JupiterCard.js';
import MarsCard     from './card/MarsCard.js';
import MercuryCard  from './card/MercuryCard.js';
import MoonCard     from './card/MoonCard.js';
import NeptuneCard  from './card/NeptuneCard.js';
import SaturnCard   from './card/SaturnCard.js';
import SunCard      from './card/SunCard.js';
import TritonCard   from './card/TritonCard.js';
import UranusCard   from './card/UranusCard.js';
import VenusCard    from './card/VenusCard.js';
import TitanCard    from './card/TitanCard.js';
import IoCard       from './card/IoCard.js';
import GanymedeCard from './card/GanymedeCard.js';
import EuropaCard   from './card/EuropaCard.js';
import CallistoCard from './card/CallistoCard.js';

const App = props => {
  const [cardElement, setCardElement] = useState(undefined);

  const prepareCard = e => {
    if (!(cardElement && cardElement.type.name === e.type.name)) {
      setCardElement(e);
    }
  };

  const closeCard = () => {
    setCardElement(undefined);
  };
  
  return (
    <div className='App d-flex'>
      <svg className='w-0'>
        <defs>
          <radialGradient id='grad1' cx='50%' cy='50%' r='50%' fx='50%' fy='50%'>
            <stop offset='100%' style={{stopColor: '#FBC02D', stopOpacity: 0.2}} />
          </radialGradient>
          <radialGradient id='grad2' cx='50%' cy='50%' r='50%' fx='50%' fy='50%'>
            <stop offset='100%' style={{stopColor: '#FAFAFA', stopOpacity: 0.2}} />
          </radialGradient>
        </defs>
      </svg>
      <div className='w-0'>
        <div className='vw-100 vh-100 d-flex justify-content-center align-items-center'>
          <Background radius={670} />
        </div>
      </div>
      <div className='w-0'>
        <div className='vw-100 vh-100 d-flex justify-content-center align-items-center'>
          <Sun onClick={() => prepareCard(<SunCard onClose={closeCard}/>)}>
            <Mercury orbitRadius={120} shift={props.shifts.mercury} onClick={() => prepareCard(<MercuryCard onClick={prepareCard} onClose={closeCard}/>)} />
            <Venus orbitRadius={150} shift={props.shifts.venus} onClick={() => prepareCard(<VenusCard onClick={prepareCard} onClose={closeCard}/>)} />
            <Earth orbitRadius={190} shift={props.shifts.earth} onClick={() => prepareCard(<EarthCard onClick={prepareCard} onClose={closeCard}/>)}>
              <Moon orbitRadius={20} shift={props.shifts.moon} onClick={() => prepareCard(<MoonCard onClose={closeCard} />)} />
            </Earth>
            <Mars orbitRadius={230} shift={props.shifts.mars} onClick={() => prepareCard(<MarsCard onClick={prepareCard} onClose={closeCard} />)} />
            <Jupiter orbitRadius={330} shift={props.shifts.jupiter} onClick={() => prepareCard(<JupiterCard onClick={prepareCard} onClose={closeCard} />)}>
              <Io orbitRadius={42} shift={props.shifts.io} onClick={() => prepareCard(<IoCard onClose={closeCard} />)} />
              <Europa orbitRadius={52} shift={props.shifts.europa} onClick={() => prepareCard(<EuropaCard onClose={closeCard} />)} />
              <Ganymede orbitRadius={62} shift={props.shifts.ganymede} onClick={() => prepareCard(<GanymedeCard onClose={closeCard} />)} />
              <Callisto orbitRadius={72} shift={props.shifts.callisto} onClick={() => prepareCard(<CallistoCard onClose={closeCard} />)} />
            </Jupiter>
            <Saturn orbitRadius={470} shift={props.shifts.saturn} onClick={() => prepareCard(<SaturnCard onClick={prepareCard} onClose={closeCard} />)}>
              <Titan orbitRadius={50} onClick={() => prepareCard(<TitanCard onClose={closeCard} />)} />
            </Saturn>
            <Uranus orbitRadius={560} shift={props.shifts.uranus} onClick={() => prepareCard(<UranusCard onClick={prepareCard} onClose={closeCard} />)} />
            <Neptune orbitRadius={630} onClick={() => prepareCard(<NeptuneCard onClick={prepareCard} onClose={closeCard} />)}>
              <Triton orbitRadius={32} shift={props.shifts.triton} onClick={() => prepareCard(<TritonCard onClose={closeCard} />)} />
            </Neptune>
          </Sun>
        </div>
      </div>
      <div className='w-0'>
        {cardElement}
      </div>
      <div className='w-0 no-print'>
        <div className='vw-100 vh-100 d-flex justify-content-end align-items-end p-3 pe-none'>
          <span className='footer text-white font-extralight'>Sizes and distances are not to scale. Created by <a className='pe-auto' href='https://github.com/dododo25'>Dmytro Terekhov</a>, 2023.</span>
        </div>
      </div>
    </div>
  );
};

export default App;
