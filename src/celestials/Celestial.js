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

    return (
      <div id={this.props.id} className='d-flex'>
        <div className='w-0 d-flex justify-content-center'>
          <div className='pe-none'>
            <svg className='d-block' width={fullRadius * 2} height={fullRadius * 2}>
              <g className='orbit-buffer' fillRule='evenodd' onClick={this.props.onClick}>
                <path className='content pe-auto'
                      d={`M 0 ${fullRadius} A ${fullRadius} ${fullRadius} 0 0 1 ${fullRadius * 2} ${fullRadius} A ${fullRadius} ${fullRadius} 0 0 1 0 ${fullRadius} z
                          M ${orbitSelectorBuffer * 2} ${fullRadius} A ${bufferPart} ${bufferPart} 0 0 1 ${orbitRadius * 2} ${fullRadius} A ${bufferPart} ${bufferPart} 0 0 1 ${orbitSelectorBuffer * 2} ${fullRadius} z`}
                      fill='transparent' />
              </g>
              <circle className='orbit' cx='50%' cy='50%' r={orbitRadius} stroke='#FAFAFA' strokeWidth={this.state.orbitStrokeWidth} strokeDasharray='12' fill='transparent' />
            </svg>
          </div>
        </div>
        <div className='w-0 d-flex justify-content-center pe-none' style={{transform: `rotate(-${this.state.shift}deg)`}}>
          <div className='d-flex justify-content-end align-items-center flex-shrink-0' style={{width: orbitRadius * 2}}>
            <div className='w-0 d-flex justify-content-center pe-auto'>
              {process(this.props.children)}
            </div>
            <div className='celestial w-0 d-flex justify-content-center'>
              {this.props.view}
            </div>
          </div>
        </div>
      </div>
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