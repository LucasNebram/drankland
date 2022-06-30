import React from "react";
import "../css/Actividades_cuatro.css";

function CuartasActividades() {
  return (
    <section className="detalles_cuatro">
      <div className="detalles__caja_4">
        <div className="detalles__actividad ">
          <p>DRANK GAME & DRINKGO</p>
        </div>
      </div>

      <div className="container detalles__container">
        <div className="detalles__content">
          <p>
            DRANK GAME <br />
            Juego de cartas perfecto para calentar el ambiente y subirnos la
            moral para una noche de locuras. <br />
            <br />
            Participa en el mejor juego de cartas de fiesta creado por los
            organizadores de la casa rural. Que comiencen los SHOTS.
          </p>
          <p>
            DRINKGO <br />
            Un bingo personalizado al más estilo fiestero. <br />
            No te pierdas los retos en función de los números que te vayan.{" "}
            <br />
            <br />
            Consigue los números de tu cartón antes que el resto para ganar,
            pero, ¿a qué precio? <br />
            <br />
            Juega y gana con tus amigos, con el gran DRINKGO.
          </p>
        </div>
        <div className="detalles__img__4 grid_imagenes">
          <img src="images/CARTA_DRANKDAY.png" alt="detalles Imge" />
          <img src="images/CARTA_DEL_DRINKGO.png" alt="detalles Imge" />
        </div>
      </div>
    </section>
  );
}

export default CuartasActividades;
