import React, {useEffect} from 'react'
import '../../App.css';
import Fotos from '../carousel/Fotos';
import Miembros from '../miembros/Miembros';
import DetallesDrank from '../detallesDrank/DetallesDrank';



function SobreNosotros() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

    <Fotos />
    <DetallesDrank />
    <Miembros />
    </>
  )
}

export default SobreNosotros