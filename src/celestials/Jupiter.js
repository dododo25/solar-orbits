import React from 'react';

import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const radius = 26;

class Jupiter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {duration: (11.86 * Year) / this.props.timeSpan, shift: this.props.shift};
  }

  render() {
    const view = (
      <svg className='d-block flex-shrink-0' width={radius * 2} height={radius * 2}>
        <g style={{transformBox: 'fill-box', transformOrigin: 'center', transform: `rotate(${this.state.shift}deg)`}}>
          <circle cx={radius} cy={radius} r={radius} fill='#DEB887' />
          <ellipse cx='38' cy='38' rx='7' ry='4' fill='#8B0000' fillOpacity='0.6' />
        </g>
      </svg>
    );
  
    return (
      <Celestial id='Jupiter'
                 view={view} 
                 orbitRadius={this.props.orbitRadius} 
                 orbitSelectorBuffer={BigOrbitSelectorBuffer} 
                 shift={this.props.shift} 
                 duration={this.state.duration} 
                 children={this.props.children} 
                 onClick={this.props.onClick} />
    );
  }

  componentDidMount() {
    setInterval(async () => {
      this.setState({shift: (this.state.shift + 1800 / (this.state.duration * 1000)) % 360});
    }, 10);
  }

  componentDidUpdate(prevProps) {
    if (this.props.timeSpan !== prevProps.timeSpan) {
      this.setState({duration: (11.86 * Year) / this.props.timeSpan});
    }
  }
}

export default Jupiter;