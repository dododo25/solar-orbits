import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App.js';
import reportWebVitals from './reportWebVitals.js';

const shifts = {
  europa: 166.52066136319684,
  saturn: 335.5347517649627,
  triton: 159.00028922964236,
  io: 244.52653310747084,
  mars: 225.93499975763274,
  mercury: 237.97317065173758,
  jupiter: 39.92402696244744,
  moon: 64.68326734504768,
  uranus: 50.587295201643265,
  venus: 86.19147169286742,
  neptune: 356.18413728014616,
  earth: 37.147350188526104,
  ganymede: 39.43422140584472,
  titan: 79.09577587991623,
  callisto: 262.22611367978294
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App shifts={shifts} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
