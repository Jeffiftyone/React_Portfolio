import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from '../assets/videos/video-1.mp4';
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>Hi, I'm Jeffrey</h1>
      <p>A Full Stack Developer from Toronto, Canada</p>
      <p>Click a section on the Navigation Bar to get started</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
         
        </Button>

        
      </div>
      <div className='hero-btns'></div>
    </div>
  );
}

export default HeroSection;
