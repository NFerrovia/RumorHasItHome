import React from 'react';
import logo from '../assets/logo.png';
import '../css/Loader.css';

const Loader = () => {
  return (
    <div className={`container disappear`}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Loader;
