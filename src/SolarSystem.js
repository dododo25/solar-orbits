import React from 'react';

import Star from './celestial/Star';
import Celestial from './celestial/Planet';

import Callisto from './celestial/view/Callisto';
import Earth    from './celestial/view/Earth';
import Europa   from './celestial/view/Europa';
import Ganymede from './celestial/view/Ganymede';
import Io       from './celestial/view/Io';
import Jupiter  from './celestial/view/Jupiter';
import Mars     from './celestial/view/Mars';
import Mercury  from './celestial/view/Mercury';
import Moon     from './celestial/view/Moon';
import Neptune  from './celestial/view/Neptune';
import Saturn   from './celestial/view/Saturn';
import Sun      from './celestial/view/Sun';
import Titan    from './celestial/view/Titan';
import Triton   from './celestial/view/Triton';
import Uranus   from './celestial/view/Uranus';
import Venus    from './celestial/view/Venus';

import { OrbitSelectorBuffer, BigOrbitSelectorBuffer, Day, Month, Year } from './Constants';

const defaultSize = 638;

class SolarSystem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {angle: 0, time: 0};
    this.calculateAngle.bind(this);
  }

  render() {
    const scale = Math.min(1.2, Math.max(0.5, Math.min(this.props.width, this.props.height) / (defaultSize * 2 + 60)));
    const angles = this.props.angles;

    const mercuryAngle  = this.calculateAngle(angles.mercury, 0.241 * Year);
    const venusAngle    = this.calculateAngle(angles.venus, 0.615 * Year);
    const earthAngle    = this.calculateAngle(angles.earth, Year);
    const moonAngle     = this.calculateAngle(angles.moon, Month);
    const marsAngle     = this.calculateAngle(angles.mars, 1.88 * Year);
    const jupiterAngle  = this.calculateAngle(angles.jupiter, 11.86 * Year);
    const ioAngle       = this.calculateAngle(angles.io, 1.7627 * Day);
    const europaAngle   = this.calculateAngle(angles.europa, 3.5255 * Day);
    const ganymedeAngle = this.calculateAngle(angles.ganymede, 7.1556 * Day);
    const callistoAngle = this.calculateAngle(angles.callisto, 16.690 * Day);
    const saturnAngle   = this.calculateAngle(angles.saturn, 29.46 * Year);
    const titanAngle    = this.calculateAngle(angles.titan, 15.9454 * Day);
    const uranusAngle   = this.calculateAngle(angles.uranus, 84.01 * Year);
    const neptuneAngle  = this.calculateAngle(angles.neptune, 164.79 * Year);
    const tritonAngle   = this.calculateAngle(angles.triton, -5.8769 * Day);

    return (
      <svg width={defaultSize * scale * 2} height={defaultSize * scale * 2} viewBox={`0 0 ${defaultSize * 2} ${defaultSize * 2}`}>
        <circle cx='50%' cy='50%' r={defaultSize} fill='#212121' />
        <g className='overflow-visible pe-none' transform={`translate(${defaultSize}, ${defaultSize})`}>
          <Star id='sun' view={<Sun size={defaultSize} />}>
            <Celestial id='mercury' view={<Mercury />} orbitRadius={110} orbitSelectorBuffer={BigOrbitSelectorBuffer} angle={mercuryAngle} />
            <Celestial id='venus' view={<Venus />} orbitRadius={140} orbitSelectorBuffer={BigOrbitSelectorBuffer} angle={venusAngle} />
            <Celestial id='earth' view={<Earth />} orbitRadius={180} orbitSelectorBuffer={BigOrbitSelectorBuffer} angle={earthAngle}>
              <Celestial id='moon' view={<Moon />} orbitRadius={20} orbitSelectorBuffer={OrbitSelectorBuffer} angle={moonAngle} />
            </Celestial>
            <Celestial id='mars' view={<Mars />} orbitRadius={220} orbitSelectorBuffer={BigOrbitSelectorBuffer} angle={marsAngle} />
            <Celestial id='jupiter' view={<Jupiter />} orbitRadius={320} orbitSelectorBuffer={BigOrbitSelectorBuffer} angle={jupiterAngle}>
              <Celestial id='io' view={<Io />} orbitRadius={40} orbitSelectorBuffer={OrbitSelectorBuffer} angle={ioAngle} />
              <Celestial id='europa' view={<Europa />} orbitRadius={52} orbitSelectorBuffer={OrbitSelectorBuffer} angle={europaAngle} />
              <Celestial id='ganymede' view={<Ganymede />} orbitRadius={64} orbitSelectorBuffer={OrbitSelectorBuffer} angle={ganymedeAngle} />
              <Celestial id='callisto' view={<Callisto />} orbitRadius={76} orbitSelectorBuffer={OrbitSelectorBuffer} angle={callistoAngle} />
            </Celestial>
            <Celestial id='satrun' view={<Saturn />} orbitRadius={460} orbitSelectorBuffer={BigOrbitSelectorBuffer} angle={saturnAngle}>
              <Celestial id='titan' view={<Titan />} orbitRadius={52} orbitSelectorBuffer={OrbitSelectorBuffer} angle={titanAngle} />
            </Celestial>
            <Celestial id='uranus' view={<Uranus />} orbitRadius={540} orbitSelectorBuffer={BigOrbitSelectorBuffer} angle={uranusAngle} />
            <Celestial id='neptune' view={<Neptune />} orbitRadius={600} orbitSelectorBuffer={BigOrbitSelectorBuffer} angle={neptuneAngle}>
              <Celestial id='triton' view={<Triton />} orbitRadius={28} orbitSelectorBuffer={OrbitSelectorBuffer} angle={tritonAngle} />
            </Celestial>
          </Star>
        </g>
      </svg>
    );
  }

  componentDidMount() {
    setInterval(async () => {
      this.setState({time: this.state.time + this.props.timeSpan / 100});
    }, 10);
  }

  calculateAngle(initAngle, spinDuration) {
    return (initAngle + 360 * this.state.time / spinDuration) % 360;
  }
}

export default SolarSystem;