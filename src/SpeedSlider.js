import React from 'react';

import './SpeedSlider.css';

class SpeedSlider extends React.Component {

  constructor(props) {
    super(props);
    this.state = {yOffset: 0};
  }

  render() {
    return (
      <div id='slider' className='font-extralight d-flex flex-column align-items-center pe-auto' style={{width: 'max-content'}}>
        <div className='d-flex'>
          <div>
            <svg id='pointer' className='d-block position-relative me-1' width='17.321' height='20' style={{top: this.state.yOffset}}>
              <path d='M 0 0 17.321 10 0 20' fill='#FAFAFA' />
            </svg>
          </div>
          <div className='d-flex flex-column user-select-none pe-none'>
            <div className='d-flex align-items-center mb-1'>
              <div className='point me-2' style={{width: 40, height: 1, backgroundColor: '#FAFAFA'}}></div>
              <span>1 m/s</span>
            </div>
            <div className='d-flex justify-content-center mb-3' style={{width: 40, height: 1}}>
              <div className='h-100' style={{width: 28, backgroundColor: '#FAFAFA'}}></div>
            </div>
            <div className='d-flex justify-content-center mb-3' style={{width: 40, height: 1}}>
              <div className='h-100' style={{width: 28, backgroundColor: '#FAFAFA'}}></div>
            </div>
            <div className='d-flex justify-content-center mb-3' style={{width: 40, height: 1}}>
              <div className='h-100' style={{width: 28, backgroundColor: '#FAFAFA'}}></div>
            </div>
            <div className='d-flex justify-content-center mb-1' style={{width: 40, height: 1}}>
              <div className='h-100' style={{width: 28, backgroundColor: '#FAFAFA'}}></div>
            </div>
            <div className='d-flex align-items-center mb-1'>
              <div className='point me-2' style={{width: 40, height: 1, backgroundColor: '#FAFAFA'}}></div>
              <span>1 d/s</span>
            </div>
            <div className='d-flex justify-content-center mb-3' style={{width: 40, height: 1}}>
              <div className='h-100' style={{width: 28, backgroundColor: '#FAFAFA'}}></div>
            </div>
            <div className='d-flex justify-content-center mb-3' style={{width: 40, height: 1}}>
              <div className='h-100' style={{width: 28, backgroundColor: '#FAFAFA'}}></div>
            </div>
            <div className='d-flex justify-content-center mb-1' style={{width: 40, height: 1}}>
              <div className='h-100' style={{width: 28, backgroundColor: '#FAFAFA'}}></div>
            </div>
            <div className='d-flex align-items-center mb-1'>
              <div className='point me-2' style={{width: 40, height: 1, backgroundColor: '#FAFAFA'}}></div>
              <span>1 h/s</span>
            </div>
            <div className='d-flex justify-content-center mb-3' style={{width: 40, height: 1}}>
              <div className='h-100' style={{width: 28, backgroundColor: '#FAFAFA'}}></div>
            </div>
            <div className='d-flex justify-content-center mb-1' style={{width: 40, height: 1}}>
              <div className='h-100' style={{width: 28, backgroundColor: '#FAFAFA'}}></div>
            </div>
            <div className='d-flex align-items-center'>
              <div className='point me-2' style={{width: 40, height: 1, backgroundColor: '#FAFAFA'}}></div>
              <span>1 s/s</span>
            </div>
            <div className='d-flex align-items-center'>
              <div className='point me-2' style={{width: 40, height: 1, backgroundColor: '#FAFAFA'}}></div>
              <span>0 s/s</span>
            </div>
          </div>
        </div>
        <div className='user-select-none pe-none'>
          <span>Speed</span>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const slider = document.getElementById('slider');
    const sliderYOffset = slider.getBoundingClientRect().y;

    const points = slider.getElementsByClassName('point');
    const pointer = document.getElementById('pointer');

    const yPosPoints = [];

    for (let point of points) {
      yPosPoints.push(point.getBoundingClientRect().y - sliderYOffset - 10);
    }

    const onMouseMove = e => this.onSliderMove(e.clientY);
    const onTouchMove = e => this.onSliderMove(e.targetTouches[0].clientY);
  
    pointer.addEventListener('mousedown', () => document.addEventListener('mousemove', onMouseMove));
    pointer.addEventListener('touchstart', () => document.addEventListener('touchmove', onTouchMove));

    document.addEventListener('mouseup', () => document.removeEventListener('mousemove', onMouseMove));
    document.addEventListener('touchend', () => document.removeEventListener('touchmove', onTouchMove));

    window.addEventListener('resize', () => {
      this.setState({sliderYOffset: slider.getBoundingClientRect().y});
    });

    this.setState({sliderYOffset: sliderYOffset, yOffset: yPosPoints[yPosPoints.length - 2], minOffset: yPosPoints[0], maxOffset: yPosPoints[yPosPoints.length - 1], points: yPosPoints});
    this.props.onChange(1);
  }

  onSliderMove(y) {
    const newYOffset = Math.max(this.state.minOffset, Math.min(this.state.maxOffset, y - this.state.sliderYOffset - 10));

    let newChange = this.state.points.length - 1;

    for (let i = 0; i < this.state.points.length - 1; i++) {
      const topPoint = this.state.points[i];
      const bottomPoint = this.state.points[i + 1];

      if (topPoint < newYOffset) {
        newChange = this.state.points.length - i + (newYOffset - bottomPoint) / (topPoint - bottomPoint) - 2;
      }
    }

    const beforeLastPoint = this.state.points[this.state.points.length - 2];
    const lastPoint = this.state.points[this.state.points.length - 1];

    if (beforeLastPoint < newYOffset) {
      if (newYOffset < lastPoint) {
        this.setState({yOffset: beforeLastPoint});
      } else {
        this.setState({yOffset: lastPoint});
      }
    } else {
      this.setState({yOffset: newYOffset});
    }

    this.props.onChange(newChange < 1 ? newChange > 0 ? 1 : 0 : newChange);
  };
}

export default SpeedSlider;