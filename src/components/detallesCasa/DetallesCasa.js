import React from "react";
import "./detalles.css";

function DetallesCasa() {
  return (
    <section id="services">
      <h5>Qué ofrece la casa</h5>
      <h2>Detalles</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>General</h3>
          </div>

          <ul className="service__list">
            <li>
              <p>Finca cerrada de 15.000m2</p>
            </li>
            <li>
              <p>Zonas de cesped, bosquejo, y full mandangon.</p>
            </li>
            <li>
              <p>Amplio aparcamiento.</p>
            </li>
            <li>
              <p>Aire acondicionado en cada instancia.</p>
            </li>
            {/* FINAL DE GENERAL */}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Interior</h3>
          </div>

          <ul className="service__list">
            <li>
              <p>
                Tres salones: Principal 5 sofas, Segundo junto a la cocina y
                Pequeño con TV y terraza con vistas
              </p>
            </li>
            <li>
              <p>Ocho super habitaciones dobles con siete baños.</p>
            </li>
            <li>
              <p>Dos de matrimonio, diez individuales y dos supletorias</p>
            </li>
            <li>
              <p>
                Secadores de pelo y toallas en los baños; así como de ropa de
                cama; todo ello lavado en lavandería.
              </p>
            </li>
            <li>
              <p>
                Dos cocinas equipadas con salida a los porches (microondas,
                vitro, lavavajillas, horno, frigorifico, arcon frigorifico,
                etc).
              </p>
            </li>
            {/* FINAL DE INTERIOR*/}
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Exterior</h3>
          </div>

          <ul className="service__list">
            <li>
              <p>
                Gran barbacoa techada y utensilios para paella, calderos y
                parrillas con porche al lado con mesas y sillas.
              </p>
            </li>
            <li>
              <p>
                Amplia zona de baño cercada, con piscina privada, escalonada y
                con cascada.
              </p>
            </li>
            <li>
              {/* <HiCheck className='service__list-icon' /> */}
              <p>
                Zona de césped, mobiliario, sombrajes, jardines, frutales y
                mucho espacio natural..
              </p>
            </li>
            {/* FINAL DE EXTERIOR */}
          </ul>
        </article>
      </div>
    </section>
  );
}

export default DetallesCasa;
