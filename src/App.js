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

function App() {
  const [cardOpened, setCardOpened] = useState(false);
  const [cardElement, setCardElement] = useState(undefined);

  let element = undefined;

  const prepareCard = e => {
    setCardOpened(!(cardElement && cardElement.type.name === e.type.name));
    setCardElement(!(cardElement && cardElement.type.name === e.type.name) ? e : undefined);
  };

  const closeCard = () => {
    setCardOpened(false);
    setCardElement(undefined);
  };

  if (cardOpened) {
    element = (
      <div className='w-0'>
        {cardElement}
      </div>
    );
  }
  
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
            <Mercury distance={120} onClick={() => prepareCard(<MercuryCard onClick={prepareCard} onClose={closeCard}/>)} />
            <Venus distance={150} onClick={() => prepareCard(<VenusCard onClick={prepareCard} onClose={closeCard}/>)} />
            <Earth distance={190} onClick={() => prepareCard(<EarthCard onClick={prepareCard} onClose={closeCard}/>)}>
              <Moon distance={20} onClick={() => prepareCard(<MoonCard onClose={closeCard} />)} />
            </Earth>
            <Mars distance={230} onClick={() => prepareCard(<MarsCard onClick={prepareCard} onClose={closeCard} />)} />
            <Jupiter distance={330} onClick={() => prepareCard(<JupiterCard onClick={prepareCard} onClose={closeCard} />)}>
              <Io distance={42}       onClick={() => prepareCard(<IoCard onClose={closeCard} />)} />
              <Europa distance={52}   onClick={() => prepareCard(<EuropaCard onClose={closeCard} />)} />
              <Ganymede distance={62} onClick={() => prepareCard(<GanymedeCard onClose={closeCard} />)} />
              <Callisto distance={72} onClick={() => prepareCard(<CallistoCard onClose={closeCard} />)} />
            </Jupiter>
            <Saturn distance={470} onClick={() => prepareCard(<SaturnCard onClick={prepareCard} onClose={closeCard} />)}>
              <Titan distance={50} onClick={() => prepareCard(<TitanCard onClick={closeCard} />)} />
            </Saturn>
            <Uranus distance={560} onClick={() => prepareCard(<UranusCard onClick={prepareCard} onClose={closeCard} />)} />
            <Neptune distance={630} onClick={() => prepareCard(<NeptuneCard onClick={prepareCard} onClose={closeCard} />)}>
              <Triton distance={32} onClick={() => prepareCard(<TritonCard onClose={closeCard} />)} />
            </Neptune>
          </Sun>
        </div>
      </div>
      {element}
      <div className='w-0 no-print'>
        <div className='vw-100 vh-100 d-flex justify-content-end align-items-end p-3 pe-none'>
          <span className='text-white font-extralight'>Sizes and distances are not to scale. Created by <a className='pe-auto' href='https://github.com/dododo25'>Dmytro Terekhov</a>, 2023.</span>
        </div>
      </div>
    </div>
  );
}

export default App;
