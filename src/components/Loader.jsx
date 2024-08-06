import React from 'react';
import loaderImage from '../assets/loader.gif';

const Loader = () => (
  <div id="preloader" style={{
    width: '100%', 
    height: '100%', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    zIndex: '100',
  }}>
    <img src={loaderImage} alt="Loading..." />
  </div>
);

export default Loader;
