import React from 'react';

import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const radius = 50;

class Saturn extends React.Component {

  constructor(props) {
    super(props);
    this.state = {duration: (29.46 * Year) / this.props.timeSpan, shift: this.props.shift};
  }

  render() {
    const view = (
      <g transform={`rotate(${this.state.shift})`}>
        <g transform={`translate(${-radius}, ${-radius})`}>
          <circle cx='50' cy='50' r='20' fill='#D2B48C' />
          <g transform='translate(10 10)'>
            <circle cx='40' cy='40' r='22' fill='transparent' strokeWidth='1' stroke='#9E9E9E' 
              transform='skewX(45) translate(-38 0)' />
            <circle cx='40' cy='40' r='24' fill='transparent' strokeWidth='0.5' stroke='#9E9E9E' 
              transform='skewX(45) translate(-38 0)' />
            <circle cx='40' cy='40' r='26' fill='transparent' strokeWidth='1.5' stroke='#9E9E9E' 
              transform='skewX(45) translate(-38 0)' />
          </g>
          <path d='M 50 30 A 20 20 0 0 1 70 50 L 33 50 L 40 32.6795  A 20 20 0 0 1 50 30' fill='#D2B48C' />
        </g>
      </g>
    );
  
    return (
      <Celestial id='Saturn'
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
      this.setState({duration: (29.46 * Year) / this.props.timeSpan});
    }
  }
}

export default Saturn;