import React from 'react';
import loaderImage from '../assets/loader.gif';

const Loader = () => (
  <div id="preloader" style={{
    width: '95vw', 
    height: '90vh', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  }}>
    <img src={loaderImage} alt="Loading..." />
  </div>
);

export default Loader;
