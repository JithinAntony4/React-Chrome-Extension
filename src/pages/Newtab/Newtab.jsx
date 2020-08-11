import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Newtab.css';
import './Newtab.scss';

const Newtab = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Chrome Extension (NewTab)
        </p>
        <a
          className="App-link"
          href="https://github.com/JithinAntony4/generate-chrome-extension"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        <h6>The color of this paragraph is defined using SASS.</h6>
      </header>
    </div>
  );
};

export default Newtab;
