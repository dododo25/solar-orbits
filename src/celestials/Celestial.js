import React from 'react';

import './Celestial.css';

import process from './ElementProcessor.js';

const strokeWidth = 0.5;
const strokeWidthExpand = 2;

class Celestial extends React.Component {

  constructor(props) {
    super(props);
    this.state = {orbitStrokeWidth: 0.5, shift: this.props.shift ? this.props.shift : 0};
  }

  render() {
    const orbitRadius = this.props.orbitRadius;
    const orbitSelectorBuffer = this.props.orbitSelectorBuffer;
    
    const fullRadius = orbitRadius + orbitSelectorBuffer;
    const bufferPart = orbitRadius - orbitSelectorBuffer;

    const onClick = () => {
      window.location.href = `#${this.props.id.toLowerCase()}`;
      this.props.onClick();
    };

    return (
      <svg id={this.props.id} className='overflow-visible'>
        <g>
          <circle className='orbit pe-none' cx='0%' cy='0%' r={orbitRadius} stroke='#FAFAFA' strokeWidth={this.state.orbitStrokeWidth} strokeDasharray='12' fill='transparent' />
          <g className='orbit-buffer' fillRule='evenodd' onClick={onClick}>
            <path className='content pe-auto'
              d={`M ${-fullRadius} 0 a ${fullRadius} ${fullRadius} 0 0 1 ${fullRadius * 2} 0 a ${fullRadius} ${fullRadius} 0 0 1 ${-fullRadius * 2} 0 z
                  M ${-bufferPart} 0 a ${bufferPart} ${bufferPart} 0 0 1 ${bufferPart * 2} 0 a ${bufferPart} ${bufferPart} 0 0 1 ${-bufferPart * 2} 0 z`}
              fill='transparent' />
          </g>
        </g>
        <g transform={`rotate(${this.state.shift * -1})`}>
          <g transform={`translate(${orbitRadius}, 0)`}>
            <g>
              {process(this.props.children)}
            </g>
            <g className='content pe-none'>
              {this.props.view}
            </g>
          </g>
        </g>
      </svg>
    );
  }

  componentDidMount() {
    const animationTime = 200;
    const orbitBuffer = document.getElementById(this.props.id).firstChild.getElementsByTagName('g')[0];
  
    const onMouseEnter = () => {
      const start = Date.now();
  
      const timer = setInterval(async () => {
        const timePassed = Date.now() - start;
      
        if (timePassed >= animationTime) {
          clearInterval(timer);
          this.setState({orbitStrokeWidth: strokeWidth + strokeWidthExpand});

          return;
        }

        this.setState({orbitStrokeWidth: strokeWidth + strokeWidthExpand * timePassed / animationTime});
      }, 10);
    };
  
    const onMouseLeave = () => {
      const start = Date.now();
  
      const timer = setInterval(async () => {
        const timePassed = Date.now() - start;
      
        if (timePassed >= animationTime) {
          clearInterval(timer);
          this.setState({orbitStrokeWidth: strokeWidth});
  
          return;
        }
      
        this.setState({orbitStrokeWidth: strokeWidth + strokeWidthExpand * (1 - timePassed / animationTime)});
      }, 10);
    };

    orbitBuffer.addEventListener('mouseenter', onMouseEnter);
    orbitBuffer.addEventListener('mouseleave', onMouseLeave);

    setInterval(async () => {
      this.setState({shift: (this.state.shift + 1800 / (this.props.duration * 1000)) % 360});
    }, 10);
  }
}

export default Celestial;