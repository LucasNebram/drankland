import React from "react";
import "../css/Actividades_dos.css";

function SegundasActividades() {
  return (
    <section className="detalles_dos">
      <div className="detalles__caja_2">
        <div className="detalles__actividad ">
          <p>CALADRANK & DRANKANA</p>
        </div>
      </div>
      <div className="container detalles__container">
        <div className="detalles__content_2">
          <p className="parrafo_uno">
            CALADRANK <br />
            Participa en numerosas pruebas hasta que solo quede uno en pie.<br />
            <br />
            Drankland en colaboración con El juego del Calamar, para disfrutar
            de diferentes pruebas a las que debes enfrentarte. <br /><br />Tranquilo, aquí
            no muere nadie.
          </p>
          
          <p>
            DRANKANA <br />
            Una gymkana personalizada al más estilo DRANKLAND <br />
            <br />
            Comparte equipo con un pequeño grupo de personas y tras sobrepasar
            las actividades y retos propuestos por los organizadores, llegad los
            primeros y alzaos con la victoria y el premio. <br />
            <br />
            ¡Diviértete como nunca y dalo todo!.
          </p>
        </div>
        <div className="detalles__img__2">
          <img src="images/CARTA_CALADRANK.png" alt="detalles Imge" />
        </div>
      </div>
    </section>
  );
}

export default SegundasActividades;
