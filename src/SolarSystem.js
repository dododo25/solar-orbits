import React from 'react';

import Sun from './celestial/star/Sun';

import Earth from './celestial/planet/Earth';

const defaultRaduis = 638;
const BigOrbitSelectorBuffer = 16;

class SolarSystem extends React.Component {

  render() {
    return (
      <svg width={defaultRaduis * 2} height={defaultRaduis * 2}>
        <g transform={`translate(${defaultRaduis}, ${defaultRaduis})`}>
          <circle cx='0' cy='0' r={defaultRaduis} fill='#212121' />
          <g className='overflow-visible pe-none'>
            <Sun id='sun'>
              <Earth id='earth' orbitRadius={180} orbitSelectorBuffer={BigOrbitSelectorBuffer} angle={0} />
            </Sun>
          </g>
        </g>
      </svg>
    );
  }
}

export default SolarSystem;