import React, { createRef } from 'react';

import './App.css';
import SolarSystem from './SolarSystem';

class App extends React.Component {

  constructor() {
    super();

    this.ref = createRef();
    this.state = {scale: 1.0};
  }

  render() {
    return (
      <div className='App vw-100 vh-100'>
        <div className='w-100 h-100 d-flex position-fixed justify-content-center align-items-center'>
          <div className='min-w-100 min-h-100 position-fixed d-flex justify-content-center align-items-center'>
            <SolarSystem ref={this.ref} scale={this.state.scale} />
          </div>
        </div>
        <div className='position-fixed vw-100 vh-100 p-2 d-flex justify-content-center align-items-end pe-none user-select-none'>
          <span className='font-extralight font-extrasmall no-print text-white'>Sizes and distances are not to scale. Created by <a className='pe-auto' href='https://github.com/dododo25'>Dmytro Terekhov</a>, 2023.</span>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const rect = this.ref.current.getBoundingClientRect();

    const onWindowResize = () => {
      this.setState({scale: 
        Math.max(0.5, Math.min(1.2, Math.min(window.innerWidth, window.innerHeight) / Math.min(rect.width, rect.height) + 0.2))
      });
    }

    window.addEventListener('resize', onWindowResize);
    onWindowResize();
  }
}

export default App;
