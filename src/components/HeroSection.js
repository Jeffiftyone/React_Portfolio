import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='../images/img-home.jpg' autoPlay loop muted />
      <h1>Hi, I'm Jeffrey</h1>
      <p>Welcome to my site</p>
    </div>
  );
}

export default HeroSection;