import React from 'react';
import './Footer.css';
// import { Button } from '../button/Button';
import { Link } from 'react-router-dom';
import { FaUmbrellaBeach } from 'react-icons/fa';
import Contact from '../contact/Contact';

function Footer() {


  return (
    <div className='footer-container'>
      <Contact />
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>De Interés</h2>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contáctanos</h2>
            <Link to='/'>Contacta</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>

          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='#'>Instagram</Link>
            <Link to='#'>Youtube</Link>
            <Link to='#'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              DRANKLAND
              <FaUmbrellaBeach className="fa-typo3" />
            </Link>
          </div>
          <small className='website-rights'>DRANKLAND © 2022</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link instagram'
              to='/'
              // target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'

              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
