import React from "react";
import "../css/Actividades_seis.css";

function SextasActividades() {
  return (
    <section className="detalles_seis">
      <div className="detalles__caja_6">
        <div className="detalles__actividad ">
          <p>KARAOKE & TORNEO BAILE GRUPAL</p>
        </div>
      </div>

      <div className="container detalles__container">
        <div className="detalles__content_6">
          <p>
            KARAOKE <br />
            Altavoz a tope con canciones al gusto y un buen micro. <br />
            No se necesita más para disfrutar del karaoke, traguito de bebida
            para aclarar la garganta y que comiencen los gritos y los cantos.
          </p>
          <p>
            TORNEO BAILE GRUPAL <br />
            Como indica el nombre, preparad vuestros mejores pasos porque toca
            baile coordinado. <br />
            En la noche de disfraces con temática libre, tambien disfrutaremos
            de vuestros bailes. <br />
            No importa el número de personas que sean en cada baile, no tengais
            vergüenza. <br />
            <br />
            ¡Al final se votará y dirá quien es el ganador!.
          </p>
        </div>
        <div className="detalles__img__6">
          <img src="images/CARTA_KARAOKE.png" alt="detalles Imge" />
        </div>
      </div>
    </section>
  );
}

export default SextasActividades;
