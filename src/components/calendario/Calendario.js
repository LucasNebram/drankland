import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "./Calendario.css";

export default function Calendario() {
  const [date, setDate] = useState(new Date(2022, 7, 1));

  const datos = [
    {
      id: 1,
      comida: "Barbacoa",
      cena: "Roscas / Pizzas",
      grupoComida: "Grupo 5 (Aguacate - Jose - Martins - Raul)",
      grupoCena: "Grupo 1 (Cristina - Balas - Victor)",
    },
    {
      id: 2,
      comida: "Carbonara",
      cena: "Paninis",
      grupoComida: "Grupo 6 (Marina - Raboso - Uganda)",
      grupoCena: "Grupo 4 (Tana - Belen - Ines)",
    },
    {
      id: 3,
      comida: "Paella",
      cena: "Hamburguesa",
      grupoComida: "Grupo 5 (Aguacate - Jose - Martins - Raul)",
      grupoCena: "Grupo 2 (Pablo - Maria - Andrea)",
    },
    {
      id: 4,
      comida: "Burros",
      cena: "Sandwiches",
      grupoComida: "Grupo 4 (Tana - Belen - Ines)",
      grupoCena: "Grupo 3 (Rodrigo - Pernia - Ainara)",
    },
    {
      id: 5,
      comida: "Huevos Rotos",
      cena: "Pollo",
      grupoComida: "Grupo 3 (Rodrigo - Pernia - Ainara)",
      grupoCena: "Grupo 6 (Marina - Raboso - Uganda)",
    },
    {
      id: 6,
      comida: "Macarrones",
      cena: "Perritos",
      grupoComida: "Grupo 2 (Pablo - Maria - Andrea)",
      grupoCena: "Grupo 1 (Cristina - Balas - Victor)",
    },
  ];

  const [organizacion, setOrg] = useState([datos]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOrg(datos[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const diaSolo = (dia) => {
    for (let i = 0; i < datos.length; i++) {
      if (dia === datos[i].id) {
        setOrg(datos[dia - 1]);
      }
    }
  };

  return (
    <section className="calendario" id="calendario">
      <h2>Calendario</h2>

      <div className="container calendario__container">
        <div className="calendario__me">
          <div className="calendario__me-image">
            <Calendar
              className={"react-calendar"}
              value={date}
              onChange={setDate}
              minDate={new Date(2022, 7, 1)}
              maxDate={new Date(2022, 7, 6)}
              onClickDay={(value) => diaSolo(value.getDay())}
            />
          </div>
        </div>
        <div className="calendario__content">
          <div className="calendario__cards" id="dias">
            <article className="calendario__card">
              <h5>Dia {organizacion.id}</h5>
              <small>Comida: {organizacion.comida}</small>
              <br />
              <small>Grupo Comida: {organizacion.grupoComida}</small>
              <br />
              <small>Cena: {organizacion.cena}</small>
              <br />
              <small>Grupo Cena: {organizacion.grupoCena}</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
