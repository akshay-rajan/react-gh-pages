import React from 'react';
import loaderImage from '../assets/loader.jpg';

const Loader = () => (
  <div id="preloader">
    <img src={loaderImage} alt="Loading..." />
  </div>
);

export default Loader;
