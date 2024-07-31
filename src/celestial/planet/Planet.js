import React from "react";

class Planet extends React.Component {

  render() {
    const orbitRadius = this.props.orbitRadius * 1;
    const angle = this.props.angle * 1;

    return (
      <g id={this.props.id}>
        <g className='orbit'>
          <circle cx='0' cy='0' r={orbitRadius} stroke='#FAFAFA' strokeWidth='0.5' strokeDasharray='12' fill='transparent' />
        </g>
        <g transform={`rotate(${angle * -1})`}>
          <g transform={`translate(${orbitRadius}, 0)`}>
            {this.props.children}
            <g className='planet'>
              <g transform={`rotate(${angle})`}>
                {this.view}
              </g>
            </g>
          </g>
        </g>
      </g>
    );
  }
}

export default Planet;