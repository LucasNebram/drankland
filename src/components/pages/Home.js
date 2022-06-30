import React, { useEffect } from 'react';
import '../../App.css';
import Cards from '../cards/Cards';
import HeroSection from '../hero/HeroSection';
import ZonaUno from '../zonaUno/ZonaUno';
import DetallesCasa from '../detallesCasa/DetallesCasa';
import ZonaDos from '../zonaDos/ZonaDos';

function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <Cards />
      <ZonaUno />
      <DetallesCasa />
      <ZonaDos />

    </>
  );
}

export default Home;
