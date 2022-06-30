import React, { useRef } from "react";
//import axios from 'axios';
//import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "../footer/Footer.css";

function Contact() {
  // CON MAILTRAP
  // const [sent, setSent] = useState(false);
  // const [text, setText] = useState('');
  // //const [email, setEmail] = useState('');

  // const handleSend = async() => {
  //   setSent(true)
  //   try {
  //     await axios.post('http://localhost:4000/send_mail', {
  //       text
  //       //email

  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0x32a9g",
        "template_69pedkl",
        form.current,
        "vv3JA05JQ9A6F2wsl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const mensaje = () => {
    // let id = document.getElementById('button');
    // if (id.isEmpty()) {
    //   return null;
    // }
    Swal.fire({
      icon: "success",
      title: "Genial!",
      text: "Se ha enviado un email a tu correo!",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Gracias, panita!",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      }
    });

    const btn = document.getElementById("btn");
    btn.addEventListener("click", function handleClick(event) {
      event.preventDefault();

      const firstEmailInput = document.getElementById("email");
      const firstNameInput = document.getElementById("nombre");

      // Clear Input
      firstEmailInput.value = "";
      firstNameInput.value = "";
    });
  };

  return (
    <section className="footer-subscription" id="contact">
      <p className="footer-subscription-heading">
        Únete a la aventura proporcionada por el equipo de Drankland
      </p>
      <p className="footer-subscription-text">
        Ingresa tu correo y recibe la invitación
      </p>
      <div className="input-areas">
        <form ref={form} onSubmit={sendEmail}>
          <input
            className="footer-input"
            name="user_name"
            type="text"
            placeholder="Tu Nombre"
            id="nombre"
            required
          />
          <input
            className="footer-input"
            name="user_email"
            type="email"
            placeholder="Tu Email"
            id="email"
            required
          />
          {/* { <input
              className="footer-input"
              type='text' value={text} onChange={(e) => setText(e.target.value)}
             /> } */}
          <input
            className="btn--outline"
            type={"submit"}
            id="btn"
            value="Unirse"
            onClick={() => mensaje()}
          />
        </form>
      </div>
    </section>
  );
}

export default Contact;
