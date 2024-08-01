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

const angles = {
  europa: 166.52066136319684,
  saturn: 335.5347517649627,
  triton: 159.00028922964236,
  io: 244.52653310747084,
  mars: 225.93499975763274,
  mercury: 237.97317065173758,
  jupiter: 39.92402696244744,
  moon: 64.68326734504768,
  uranus: 50.587295201643265,
  venus: 86.19147169286742,
  neptune: 356.18413728014616,
  earth: 37.147350188526104,
  ganymede: 39.43422140584472,
  titan: 79.09577587991623,
  callisto: 262.22611367978294
};

class SolarSystem extends React.Component {

  constructor(props) {
    super(props);

    this.ref = createRef();
    this.mainPartRef = createRef();
  }

  render() {
    return (
      <svg ref={this.ref}>
        <g transform={`scale(${this.props.scale ?? 1})`} style={{transformOrigin: '50% 50%'}}>
          <g>
            <circle cx='0' cy='0' r='50%' fill='#212121' />
            <g ref={this.mainPartRef} className='overflow-visible pe-none'>
              <Sun id='sun'>
                <Mercury id='mercury' orbitRadius='110' initialAngle={angles.mercury} period={0.241 * Year} />
                <Venus id='venus' orbitRadius='140' initialAngle={angles.venus} period={0.615 * Year} />
                <Earth id='earth' orbitRadius='180' initialAngle={angles.earth} period={Year}>
                  <Moon id='moon' orbitRadius='20' initialAngle={angles.moon} period={Month} />
                </Earth>
                <Mars id='mars' orbitRadius='220' initialAngle={angles.mars} period={1.88 * Year} />
                <Jupiter id='jupiter' orbitRadius='320' initialAngle={angles.jupiter} period={11.86 * Year}>
                  <Io id='io' orbitRadius='40' initialAngle={angles.io} period={1.7627 * Day} />
                  <Europa id='europa' orbitRadius='52' initialAngle={angles.europa} period={3.5255 * Day} />
                  <Ganymede id='ganymede' orbitRadius='64' initialAngle={angles.ganymede} period={7.1556 * Day} />
                  <Callisto id='callisto' orbitRadius='76' initialAngle={angles.callisto} period={16.690 * Day} />
                </Jupiter>
                <Saturn id='saturn' orbitRadius='460' initialAngle={angles.saturn} period={29.46 * Year}>
                  <Titan id='titan' orbitRadius='52' initialAngle={angles.titan} period={15.9454 * Day} />
                </Saturn>
                <Uranus id='uranus' orbitRadius='540' initialAngle={angles.uranus} period={84.01 * Year} />
                <Neptune id='neptune' orbitRadius='600' initialAngle={angles.neptune} period={164.79 * Year}>
                  <Triton id='triton' orbitRadius='28' initialAngle={angles.triton} period={-5.8769 * Day} />
                </Neptune>
              </Sun>
            </g>
          </g>
        </g>
      </svg>
    );
  }

  componentDidMount() {
    const rect = this.mainPartRef.current.getBoundingClientRect();
    const radius = Math.max(rect.width, rect.height) * 2 - Math.min(rect.width, rect.height) + 8;

    this.ref.current.setAttributeNS(null, 'width', radius);
    this.ref.current.setAttributeNS(null, 'height', radius);
    this.ref.current.firstChild.firstChild.setAttributeNS(null, 'transform', `translate(${radius / 2}, ${radius / 2})`);
  }

  getBoundingClientRect() {
    return this.ref.current.getBoundingClientRect();
  }
}

export default SolarSystem;