import React, { useState, useEffect } from 'react';
import { Button } from '../button/Button';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';
import { FaUmbrellaBeach } from 'react-icons/fa'

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }


  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={() => {closeMobileMenu(); scrollToTop();}} >
            DRANKLAND
            <FaUmbrellaBeach className="fa-typo3" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={() => window.location.reload()}>
                Inicio
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/#experience'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Actividades
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Sobre Nosotros
              </Link>
            </li>

            <li>
              <Link
                to='/#contact'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Apúntate
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline' to={'/#contact'}>APUNTATE</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
