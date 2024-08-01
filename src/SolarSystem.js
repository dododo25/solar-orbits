import React, { createRef } from 'react';

import { Day, Month, Year } from './Constants';

import Sun from './celestial/star/Sun';

import Callisto from './celestial/planet/Callisto';
import Earth    from './celestial/planet/Earth';
import Europa   from './celestial/planet/Europa';
import Ganymede from './celestial/planet/Ganymede';
import Io       from './celestial/planet/Io';
import Jupiter  from './celestial/planet/Jupiter';
import Mars     from './celestial/planet/Mars';
import Mercury  from './celestial/planet/Mercury';
import Moon     from './celestial/planet/Moon';
import Neptune  from './celestial/planet/Neptune';
import Saturn   from './celestial/planet/Saturn';
import Titan    from './celestial/planet/Titan';
import Triton   from './celestial/planet/Triton';
import Uranus   from './celestial/planet/Uranus';
import Venus    from './celestial/planet/Venus';

class SolarSystem extends React.Component {

  constructor(props) {
    super(props);

    this.backgroundRef = createRef();
    this.mainPartRef = createRef();
  }

  render() {
    return (
      <svg ref={this.backgroundRef}>
        <g>
          <circle cx='0' cy='0' r='50%' fill='#212121' />
          <g ref={this.mainPartRef} className='overflow-visible pe-none'>
            <Sun id='sun'>
              <Mercury id='mercury' orbitRadius='110' period={0.241 * Year} />
              <Venus id='venus' orbitRadius='140' period={0.615 * Year} />
              <Earth id='earth' orbitRadius='180' period={Year}>
                <Moon id='moon' orbitRadius='20' period={Month} />
              </Earth>
              <Mars id='mars' orbitRadius='220' period={1.88 * Year} />
              <Jupiter id='jupiter' orbitRadius='320' period={11.86 * Year}>
                <Io id='io' orbitRadius='40' period={1.7627 * Day} />
                <Europa id='europa' orbitRadius='52' period={3.5255 * Day} />
                <Ganymede id='ganymede' orbitRadius='64' period={7.1556 * Day} />
                <Callisto id='callisto' orbitRadius='76' period={16.690 * Day} />
              </Jupiter>
              <Saturn id='saturn' orbitRadius='460' period={29.46 * Year}>
                <Titan id='titan' orbitRadius='52' period={15.9454 * Day} />
              </Saturn>
              <Uranus id='uranus' orbitRadius='540' period={84.01 * Year} />
              <Neptune id='neptune' orbitRadius='600' period={164.79 * Year}>
                <Triton id='triton' orbitRadius='28' period={-5.8769 * Day} />
              </Neptune>
            </Sun>
          </g>
        </g>
      </svg>
    );
  }

  componentDidMount() {
    const rect = this.mainPartRef.current.getBoundingClientRect();
    const radius = Math.max(rect.width, rect.height) * 2 - Math.min(rect.width, rect.height) + 8;

    this.backgroundRef.current.setAttributeNS(null, 'width', radius);
    this.backgroundRef.current.setAttributeNS(null, 'height', radius);
    this.backgroundRef.current.firstChild.setAttributeNS(null, 'transform', `translate(${radius / 2}, ${radius / 2})`);
  }
}

export default SolarSystem;