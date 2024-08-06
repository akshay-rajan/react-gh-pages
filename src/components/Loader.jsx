import React from 'react';
import loaderImage from '../assets/loader.gif';

const Loader = () => (
  <div id="preloader" className="loader">
    <img src={loaderImage} alt="Loading..." />
  </div>
);

export default Loader;
