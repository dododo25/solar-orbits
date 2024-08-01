import React, { createRef } from 'react';

import Sun from './celestial/star/Sun';

import Earth from './celestial/planet/Earth';
import Moon from './celestial/planet/Moon';

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
              <Earth id='earth' orbitRadius='180' angle='0' >
                <Moon id='moon' orbitRadius='20' angle='0' />
              </Earth>
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