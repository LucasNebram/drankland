import React from 'react'
import '../css/Actividades_cinco.css';

function QuintasActividades() {
  return (
    <section className="detalles_cinco">
      <div className="detalles__caja_5">
        <div className="detalles__actividad ">
          <p>DISFRACES CON TEMÁTICA</p>
        </div>
      </div>

      <div className="container detalles__container">
        <div className="detalles__img__5">
            <img
              src="images/CARTA_DISFRACES.png"
              alt="detalles Imge"
            />
        </div>
        <div className="detalles__content_5">
          <p>
            TEMATICA ANIMADA <br/>
            Muestra a la gente tu disfraz chulísimo,<br /> ¿qué personaje animado has elegido?, <br /> 
            ¿alguién se ha copiado de otro?, <br /> ¿chupito por cada
            disfraz de Disney que haya? ¡Lo veremos!
            </p>
          <p>
            TEMATICA LIBRE <br/>
            Disfraces randoms, recuerda que puedes ir individual, parejas, trios, o en grupos, lo importante es que todos tengamos algo divertido. <br/><br />
            Tened bien en cuenta vuestros outfits, porque tras unos outfits bien bacanos, recordad que habrá un gran torneo. <br/><br/>


            ¿Quién tendrá el disfraz más sorprendente?.
          </p>
        </div>
      </div>
    </section>
  )
}

export default QuintasActividades