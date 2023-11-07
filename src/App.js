import React from 'react';

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

import SpeedSlider from './SpeedSlider.js';

import { Day, Hour, Month, Second } from './Constants.js';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      shifts: this.props.shifts,
      actualTime: new Date(),
      spaceTime: new Date(), 
      timeSpan: Second,
      cardElement: undefined};
  }

  render() {
    const cardElement = this.state.cardElement;
    const spaceTime = this.state.spaceTime;

    const prepareCard = e => {
      if (!(cardElement && cardElement.type.name === e.type.name)) {
        this.setState({cardElement: e});
      }
    };
  
    const closeCard = () => {
      this.setState({cardElement: undefined});
    };
    
    return (
      <div className='App d-flex text-white'>
        <div className='w-0'>
          <div className='vw-100 vh-100 d-flex justify-content-center align-items-center'>
            <Background radius={632} />
          </div>
        </div>
        <div className='w-0'>
          <div className='vw-100 vh-100 d-flex justify-content-center align-items-center'>
            <Sun onClick={() => prepareCard(<SunCard onClose={closeCard}/>)}>
              <Mercury orbitRadius={110} shift={this.props.shifts.mercury} timeSpan={this.state.timeSpan} onClick={() => prepareCard(<MercuryCard onClick={prepareCard} onClose={closeCard}/>)} />
              <Venus orbitRadius={140} shift={this.props.shifts.venus} timeSpan={this.state.timeSpan} onClick={() => prepareCard(<VenusCard onClick={prepareCard} onClose={closeCard}/>)} />
              <Earth orbitRadius={180} shift={this.props.shifts.earth} timeSpan={this.state.timeSpan} onClick={() => prepareCard(<EarthCard onClick={prepareCard} onClose={closeCard}/>)}>
                <Moon orbitRadius={20} shift={this.props.shifts.moon} timeSpan={this.state.timeSpan} onClick={() => prepareCard(<MoonCard onClose={closeCard} />)} />
              </Earth>
              <Mars orbitRadius={220} shift={this.props.shifts.mars} timeSpan={this.state.timeSpan} onClick={() => prepareCard(<MarsCard onClick={prepareCard} onClose={closeCard} />)} />
              <Jupiter orbitRadius={310} shift={this.props.shifts.jupiter} timeSpan={this.state.timeSpan} onClick={() => prepareCard(<JupiterCard onClick={prepareCard} onClose={closeCard} />)}>
                <Io orbitRadius={40} shift={this.props.shifts.io} timeSpan={this.state.timeSpan} onClick={() => prepareCard(<IoCard onClose={closeCard} />)} />
                <Europa orbitRadius={51} shift={this.props.shifts.europa} timeSpan={this.state.timeSpan} onClick={() => prepareCard(<EuropaCard onClose={closeCard} />)} />
                <Ganymede orbitRadius={62} shift={this.props.shifts.ganymede} timeSpan={this.state.timeSpan} onClick={() => prepareCard(<GanymedeCard onClose={closeCard} />)} />
                <Callisto orbitRadius={73} shift={this.props.shifts.callisto} timeSpan={this.state.timeSpan} onClick={() => prepareCard(<CallistoCard onClose={closeCard} />)} />
              </Jupiter>
              <Saturn orbitRadius={450} shift={this.props.shifts.saturn} timeSpan={this.state.timeSpan} onClick={() => prepareCard(<SaturnCard onClick={prepareCard} onClose={closeCard} />)}>
                <Titan orbitRadius={45} shift={this.props.shifts.titan} timeSpan={this.state.timeSpan} onClick={() => prepareCard(<TitanCard onClose={closeCard} />)} />
              </Saturn>
              <Uranus orbitRadius={535} shift={this.props.shifts.uranus} timeSpan={this.state.timeSpan} onClick={() => prepareCard(<UranusCard onClick={prepareCard} onClose={closeCard} />)} />
              <Neptune orbitRadius={596} shift={this.props.shifts.neptune} timeSpan={this.state.timeSpan} onClick={() => prepareCard(<NeptuneCard onClick={prepareCard} onClose={closeCard} />)}>
                <Triton orbitRadius={28} shift={this.props.shifts.triton} onClick={() => prepareCard(<TritonCard onClose={closeCard} />)} />
              </Neptune>
            </Sun>
          </div>
        </div>
        <div className='w-0'>
        </div>
        <div className='w-0'>
          <div className='vh-100 d-flex flex-column justify-content-end p-3'>
            <SpeedSlider onChange={this.changeSpeed.bind(this)} />
            <span className='font-extralight pe-none' style={{width: 'max-content'}}>{`Current time: ${spaceTime.getDate() < 10 ? '0' : ''}${spaceTime.getDate()}-${months[spaceTime.getMonth()]}-${spaceTime.getFullYear()} ${spaceTime.getHours() < 10 ? '0' : ''}${spaceTime.getHours()}:${spaceTime.getMinutes() < 10 ? '0' : ''}${spaceTime.getMinutes()}:${spaceTime.getSeconds() < 10 ? '0' : ''}${spaceTime.getSeconds()}`}</span>
          </div>
        </div>
        <div className='w-0'>
          {cardElement}
        </div>
        <div className='w-0 no-print'>
          <div className='vw-100 vh-100 d-flex justify-content-end align-items-end p-3 pe-none'>
            <span className='font-extralight'>Sizes and distances are not to scale. Created by <a className='pe-auto' href='https://github.com/dododo25'>Dmytro Terekhov</a>, 2023.</span>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    setInterval(async () => {
      this.setState({actualTime: new Date(), spaceTime: new Date(this.state.spaceTime.getTime() + (Date.now() - this.state.actualTime.getTime()) * this.state.timeSpan)});
    }, 10);
  }

  changeSpeed(v) {
    if (v === 4) {
      this.setState({timeSpan: Month});
    } else if (v >= 3) {
      this.setState({timeSpan: (Month - Day) * (v - 3) + Day});
    } else if (v >= 2) {
      this.setState({timeSpan: (Day - Hour) * (v - 2) + Hour});
    } else if (v >= 1) {
      this.setState({timeSpan: (Hour - Second) * (v - 1) + Second});
    } else {
      this.setState({timeSpan: 0});
    }
  } 
}

export default App;
