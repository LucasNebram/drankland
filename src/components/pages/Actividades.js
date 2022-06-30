import React, { useEffect } from 'react'
import CuartasActividades from '../actividades/js/CuartasActividades'

import PrimerasActividades from '../actividades/js/PrimerasActividades'
import QuintasActividades from '../actividades/js/QuintasActividades'
import SegundasActividades from '../actividades/js/SegundasActividades'
import SeptimasActividades from '../actividades/js/SeptimasActividades'
import SextasActividades from '../actividades/js/SextasActividades'
import TercerasActividades from '../actividades/js/TercerasActividades'



function Actividades() {

  useEffect(() => {
    window.scrollTo(0,0);
  }, []) 

  return (
    <>
      <PrimerasActividades/>
      <SegundasActividades/>
      <TercerasActividades/>
      <CuartasActividades/>
      <QuintasActividades/>
      <SextasActividades/>
      <SeptimasActividades/>
    </>
  )
}

export default Actividades