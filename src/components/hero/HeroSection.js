import React from 'react';
import '../../App.css';
import { Button } from '../button/Button';
import './HeroSection.css';

function HeroSection() {

  

  const cambiarPagina = () => {
      window.open('https://youtu.be/3b_xZuCfZ5U', '_blank');
  }

  return (
    <div className='hero-container'>
      <video src='/videos/video.mp4' autoPlay loop muted />
      <h1>DRANKLAND</h1>
      <p>¿A qué estas esperando?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={cambiarPagina}
          to={'/'}
          
        >
          AFTERMOVIE 2021 <i className='far fa-play-circle' />
        </Button>

      </div>
    </div>
  );
}

export default HeroSection;
