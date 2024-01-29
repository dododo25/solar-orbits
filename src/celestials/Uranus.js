import React from 'react';

import './Celestial.css';

import Celestial from './Celestial.js';
import {BigOrbitSelectorBuffer, Year} from '../Constants.js';

const radius = 33;

class Uranus extends React.Component {

  constructor(props) {
    super(props);
    this.state = {duration: (84.01 * Year) / this.props.timeSpan, shift: this.props.shift};
  }

  render() {
    const view = (
      <g transform={`rotate(${this.state.shift})`}>
        <g transform={`translate(${-radius}, ${-radius})`}>
          <circle cx='33' cy='33' r='18' fill='#66BB6A' />
          <g transform='rotate(9) translate(30 -16)'>
              <g transform='scale(0.2 1.3)'>
                  <circle cx='33' cy='33' r='20' fill='transparent' stroke='#BDBDBD' />
              </g>
          </g>
          <path d='M 31 50.8885 A 18 18 0 0 1 33 15 z' fill='#66BB6A' />
        </g>
      </g>
    );
  
    return (
      <Celestial id='Uranus'
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
      this.setState({duration: (84.01 * Year) / this.props.timeSpan});
    }
  }
}

export default Uranus;