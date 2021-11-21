import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='./assets/videos/video-1.mp4' autoPlay loop muted />
      <h1>Hi, I'm Jeffrey</h1>
      <p>An aspiring full stack developer from Toronto, Canada</p>
      <p>Click a section on the Navigation Bar to get started</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         <i class="fab fa-github"></i> Check out my GitHub!
        </Button>
      </div>
      <div className='hero-btns'></div>
    </div>
  );
}

export default HeroSection;
