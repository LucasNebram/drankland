import React from "react";
import "./Miembros.css";

function Miembros() {
  return (
    <section className="miembros">
      <div className="container grid__container">
        <div className="miembro foto1">
          <img
            src="/images/CARTA_MARTINS.png"
            alt="as"
            className="miembro_img"
            width={300}
            height={300}
          />
        </div>
        <div className="miembro foto2">
          <img
            src="/images/CARTA_RABOX.png"
            alt="as"
            className="miembro_img"
            width={300}
            height={300}
          />
        </div>
        <div className="miembro foto3">
          <img
            src="/images/CARTA_JOSEFLOJA.png"
            alt="as"
            className="miembro_img"
            width={300}
            height={300}
          />
        </div>
        <div className="miembro foto4">
          <img
            src="/images/CARTA_PABLO.png"
            alt="as"
            className="miembro_img"
            width={300}
            height={300}
          />
        </div>
        <div className="competencia competencia-uno">
          <p>Amante del Excel</p>
        </div>
        <div className="competencia competencia-dos">
          <p>Director Webístico</p>
        </div>
        <div className="competencia competencia-tres">
          <p>Manos locas</p>
        </div>
        <div className="competencia competencia-cuatro">
          <p>Pasaba por aquí</p>
        </div>
      </div>
    </section>
  );
}

export default Miembros;
