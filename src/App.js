import React from 'react';

import './App.css';
import SolarSystem from './SolarSystem';

class App extends React.Component {

  render() {
    return (
      <div className='App vw-100 vh-100'>
        <div className='w-100 h-100 d-flex position-fixed justify-content-center align-items-center'>
          <div className='min-w-100 min-h-100 position-fixed d-flex justify-content-center align-items-center'>
            <SolarSystem />
          </div>
        </div>
        <div className='position-fixed vw-100 vh-100 p-2 d-flex justify-content-center align-items-end pe-none user-select-none'>
          <span className='font-extralight font-extrasmall no-print text-white'>Sizes and distances are not to scale. Created by <a className='pe-auto' href='https://github.com/dododo25'>Dmytro Terekhov</a>, 2023.</span>
        </div>
      </div>
    );
  }
}

export default App;
