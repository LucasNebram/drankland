import React from "react";
import "../css/Actividades_tres.css";

function TercerasActividades() {
  return (
    <section className="detalles_tres">
      <div className="detalles__caja_3">
        <div className="detalles__actividad ">
          <p>PHOTOCALL & PARTY'S</p>
        </div>
      </div>
      <div className="container detalles__container">
        <div className="detalles__img__3 grid_imagenes">
          <img src="/images/photocall.png" alt="detalles Imge" />
          <img src="/images/photocall.png" alt="detalles Imge" className="imagen_2"/>
        </div>
        <div className="detalles__content">
          <p>
            PHOTOCALL <br />
            Realizaremos una gran números de fotos y no puede ser menos no tener un Photocall. <br/>
            Tras una tarde de diversión en la Inauguración y Olimpiadas, a la noche tendremos Photocall especial, aunque
            también se usarán los demás dias, cuantas más fotos, mejor.
          </p>
          <p>
            NEON PARTY & PARTY <br />
            Dos noches espectaculares donde en una de ellas tendremos una temática especial: NEON. <br /><br />
            Esperemos que tengais ganas de darlo todo bailando y diviertiendóos, porque en las Party's solo
            hay un lema: DON'T STOP THE PARTY. <br />
            
            <br />
            Rellena de tu bebida favorita tu vaso, calienta esas piernas para ir hasta abajo y, ¡Que la fiesta comience!
          </p>
        </div>
      </div>
    </section>
  );
}

export default TercerasActividades;
