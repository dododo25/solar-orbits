import './App.css';

import Background from './Background.js';
import Callisto from './Callisto';
import Earth from './Earth.js';
import Europa from './Europa';
import Ganymede from './Ganymede';
import Io from './Io';
import Jupiter from './Jupiter.js';
import Mars from './Mars.js';
import Mercury from './Mercury.js';
import Moon from './Moon.js';
import Neptune from './Neptune.js';
import Saturn from './Saturn.js';
import Sun from './Sun.js';
import Titan from './Titan';
import Triton from './Triton';
import Uranus from './Uranus.js';
import Venus from './Venus.js';
import PlanetCard from './card/PlanetCard.js';

function App() {
  return (
    <div className='App d-flex justify-content-center'>
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
        <div className='vh-100 d-flex justify-content-center align-items-center'>
          <div>
            <Background radius={670} />
          </div>
        </div>
      </div>
      <div className='w-0'>
        <div className='vh-100 d-flex justify-content-center align-items-center'>
          <Sun>
            <Mercury distance={120} />
            <Venus distance={150} />
            <Earth distance={190}>
              <Moon distance={20} />
            </Earth>
            <Mars distance={230} />
            <Jupiter distance={330}>
              <Io distance={42} />
              <Europa distance={52} />
              <Ganymede distance={62} />
              <Callisto distance={72} />
            </Jupiter>
            <Saturn distance={470}>
              <Titan distance={50} />
            </Saturn>
            <Uranus distance={560} />
            <Neptune distance={630}>
              <Triton distance={32} />
            </Neptune>
          </Sun>
        </div>
      </div>
      <div className='w-0'>
        <PlanetCard />
      </div>
      <div className='w-0 no-print'>
        <div className='vw-50 vh-100 d-flex justify-content-end align-items-end p-3 pe-none'>
          <h6 className='text-white font-extralight'>Sizes and distances are not to scale. Created by <a className='pe-auto' href='https://github.com/dododo25'>Dmytro Terekhov</a>, 2023.</h6>
        </div>
      </div>
    </div>
  );
}

export default App;
