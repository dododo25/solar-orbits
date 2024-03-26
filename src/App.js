import React from 'react';

import './App.css';

import { Day } from './Constants';
import SolarSystem from './SolarSystem';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      timeSpan: Day
    };
  }

  render() {
    const isLarge = this.state.isLarge;

    const solarElementWidth  = isLarge ? Math.min(window.innerWidth, window.innerHeight) : 768;
    const solarElementHeight = isLarge ? Math.max(window.innerWidth, window.innerHeight) : 768;

    return (
      <div className='App vw-100 vh-100'>
        <div className='w-100 h-100 d-flex position-fixed justify-content-center align-items-center'>
          <div className='min-w-100 min-h-100 position-fixed d-flex justify-content-center align-items-center'>
            <SolarSystem width={solarElementWidth} height={solarElementHeight} angles={this.props.angles} timeSpan={this.state.timeSpan} />
          </div>
        </div>
        <div className='position-fixed vw-100 vh-100 p-2 d-flex justify-content-center align-items-end pe-none user-select-none'>
          <span className='font-extralight font-extrasmall no-print text-white'>Sizes and distances are not to scale. Created by <a className='pe-auto' href='https://github.com/dododo25'>Dmytro Terekhov</a>, 2023.</span>
        </div>
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
      const isLarge = Math.min(window.innerWidth, window.innerHeight) >= 768;
      this.setState({isLarge, timeSpan: isLarge ? Day : 0});
    });

    const isLarge = Math.min(window.innerWidth, window.innerHeight) >= 768;
    this.setState({isLarge, timeSpan: isLarge ? Day : 0});
  }
}

export default App;
