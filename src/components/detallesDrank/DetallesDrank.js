import React from "react";
import "./DetallesDrank.css";

function DetallesDrank() {
  return (
    <section id="detalles" className="detalles">
      <h5>A beber bb</h5>
      <h2>DRANK</h2>

      <div className="container detalles__container">
        <div className="detalles__img">
          <img src="/images/drank-5.jpg" alt="detalles Imge" />
        </div>
        <div className="detalles__content">
          <div className="detalles__cards">
            <article className="detalles__card">
              <h5>+100 cartas de</h5>
              <small>Habilidades</small>
              <br />
              <small>Accion</small>
              <br />
              <small>Dobles</small>
            </article>
            <article className="detalles__card">
              <h5>10 Roles</h5>
              <small>3 salones</small>
              <br />
              <small>2 cocinas</small>
            </article>
            <article className="detalles__card">
              <h5>Niveles</h5>
              <small>Parque</small>
              <br />
              <small>Cortados</small>
              <br />
              <small>Hot</small>
            </article>
          </div>
          <p>
            DRANK <br />
            La empresa patrocinadora de esta casa rural dispone del mejor juego
            de cartas para fiesta, precopeo y diversión con tu grupo. <br />
            Aún no disponible en tienda online ni física pero próximamente
            daremos más información sobre nuevas noticias. !Siguenos en nuestras
            RRSS para no perderte nada!
          </p>
          <p>
            El equipo Drank patrocina y organiza esta casa rural hecha por y
            para fiesteros. <br />
            Esperamos que participes en esta gran experiencia de una semana que
            te sabrá a poco y querrás repetir al 200%. <br />
            Y si requieres de nuestros servicios para una futura organización o
            creación de experiencia para ti y demás gente, ¡No esperes más!{" "}
            <br />
            <br />
            Cualquier duda no olvides contactar con los organizadores: Martinez,
            Josh, Pablo y Sergio.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DetallesDrank;
