import React from "react";
import "../css/Actividades_uno.css";

function PrimerasActividades() {
  return (
    <section className="detalles_uno">
      <h5>Breve Resumen</h5>
      <h2>Actividades</h2>
      <div className="detalles__caja_1">
        <div className="detalles__actividad ">
          <p>OLYMPIC DRANK GREEKS</p>
        </div>
      </div>
      <div className="container detalles__container">
        <div className="detalles__img__1">
          <img src="/images/carta_olimpiadas_griegas.png" alt="detalles Imge" className="imagen_olimpiadas"/>
        </div>
        <div className="detalles__content">
          <div className="detalles__titulo"></div>
          <p>
            Después de la gran inauguración, no acabará aquí la cosa. <br /><br />
            Se celebrará las Olimpiadas del beber y la diversión, donde solo
            habrá un equipo ganador. <br />
            Como el nombre indica, con nuestra indumentaria griega, nos
            dividiremos en 2 equpos, rojo y azul.
          </p>
          <p>
            Las Olimpiadas se basarán en diferentes tipos de prueba donde
            participarán todo el equipo, o representantes del equipo que saldrán
            a la palestra a demostrar sus dotes y ganar puntos para que su
            equipo salga vencedor. <br /><br />
            Habrá todo tipo de pruebas que pondrán en duda vuestras capacidades,
            puntería, habilidad, absorción, rapidez, trabajo en equipo, y muchas
            más. <br />
            <br />
            ¡Prepárate!
          </p>
        </div>
      </div>
    </section>
  );
}

export default PrimerasActividades;
