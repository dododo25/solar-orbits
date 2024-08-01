import React from 'react';

class Planet extends React.Component {

  render() {
    let orbitRadius = this.props.orbitRadius * 1;

    let period = this.props.period * 1;
    let oppositeMultiplier = 1;

    if (period < 0) {
      period = Math.abs(period);
      oppositeMultiplier = -1;
    }

    return (
      <g id={this.props.id}>
        <g className='orbit'>
          <circle cx='0' cy='0' r={orbitRadius} stroke='#FAFAFA' strokeWidth='0.5' strokeDasharray='12' fill='transparent' />
        </g>
        <g transform={`rotate(${this.props.initialAngle * -1})`}>
          <g>
            <g transform={`translate(${orbitRadius}, 0)`}>
              <g className='moons'>
                {this.props.children}
                <animateTransform
                  attributeName='transform'
                  attributeType='XML'
                  type='rotate'
                  from='0'
                  to={360 * oppositeMultiplier}
                  dur={`${period}s`}
                  repeatCount='indefinite' />
              </g>
              <g transform={`rotate(${this.props.initialAngle * 1})`}>
                <g>
                  {this.view}
                  <animateTransform
                    attributeName='transform'
                    attributeType='XML'
                    type='rotate'
                    from='0'
                    to={360 * oppositeMultiplier}
                    dur={`${period}s`}
                    repeatCount='indefinite' />
                </g>
              </g>
            </g>
            <animateTransform
              attributeName='transform'
              attributeType='XML'
              type='rotate'
              from='0'
              to={-360 * oppositeMultiplier}
              dur={`${period}s`}
              repeatCount='indefinite' />
          </g>
        </g>
      </g>
    );
  }
}

export default Planet;