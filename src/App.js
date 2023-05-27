import React from 'react';
import './styleApp.css';
import logo from './logo.png';

function WebLayout() {
  return(
    <div class="home-background">
      <img src={logo} className="home-logo" alt="logo" />
      <div class="component-tabs">
        <p class="home-component">Home</p>
        <p class="about-component">About</p>
      </div>
      <div class="home-mission-block"></div>

    </div>
  );
}

export default WebLayout;
