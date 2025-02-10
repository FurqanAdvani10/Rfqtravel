import React from 'react';
import './hero.css';
import video from '../../Assets/Makka Drone Stock Footage [no copyright] free video.mp4';

function Hero() {
  return (
    <div className="hero-main">
      <div className="video-container">
        <video className="video" autoPlay muted loop>
          <source src={video} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        <div className="video-content" data-aos="fade-up" data-aos-duration="1500">
          <h4 className="hero-subtitle">لَبَّيْكَ اللَّهُمَّ لَبَّيْك</h4>
          <h1 className="hero-title">Experience a Peaceful Pilgrimage with Karwan-e-Rafeeq ul Harmain</h1>
          <button className="hero-button">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
