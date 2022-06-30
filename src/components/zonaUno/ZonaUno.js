import React from "react";
import "./zonaUno.css";

function zonaUno() {
  return (
    <section id="about" className="about">
      <h5>Cosas que debes saber</h5>
      <h2>La Casa</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img
              src="images/casa2.jpg"
              alt="About Imge"
              width={550}
              height={330}
            />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <h5>15.000m2</h5>
              <small>8 dormitorios</small>
              <br />
              <small>7 baños</small>
            </article>
            <article className="about__card">
              <h5>Interior</h5>
              <small>3 salones</small>
              <br />
              <small>2 cocinas</small>
            </article>
            <article className="about__card">
              <h5>Exterior</h5>
              <small>Piscina con cascada</small>
              <br />
              <small>Barbacoa</small>
            </article>
          </div>
          <p>
            La Casa Rural Huerta Cabañeros se encuentra a las afueras de el
            municipio de El Robledo, Ciudad Real. Esta casa tiene las
            necesidades y requerimientos perfectos para una semana especatular
            donde pasar una estancia fructífera y fogosa con 18 personas en
            ella.
          </p>
          <p>
            Ubicada privilegiadamente entre el río Alcobilla y el río Bullaque,
            la finca cuenta con una gran barbacoa techada y utensilios para
            paella, calderos y parrillas. Junto a la barbacoa, uno de los
            porches con mesas y sillas. Nuestros huéspedes pueden disfrutar de
            una amplia zona de baño cercada, con piscina privada, escalonada y
            con cascada. Zona de césped, mobiliario, sombrajes, jardines,
            frutales y mucho espacio natural.
          </p>

          <a
            href="https://www.huertacabaneros.com/"
            className="btn btn-primary"
            target={"_blank"}
            rel="noreferrer"
          >
            Enlace a la casa
          </a>
        </div>
      </div>
    </section>
  );
}

export default zonaUno;
