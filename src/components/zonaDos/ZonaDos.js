import React from 'react'
import './zonaDos.css' 

function zonaDos() {
  return (
    <section id='experience' className='experience'>
      <h5>Actividades que tenemos</h5>
      <h2>Las Actividades</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Dias</h3>
          <div className="experience__content">
            <article className='experience__details'>
              
              <div>
                <h4>DIA 1</h4>
                <small className='text-light'>Inauguración</small><br></br>
                <small className='text-light'>Olympic Drank Greeks</small>
              </div>
            </article>
            <article className='experience__details'>
              
              <div>
                <h4>DIA 2</h4>
                <small className='text-light'>Descansito</small>
              </div>
            </article>
            <article className='experience__details'>
              
              <div>
                <h4>DIA 3</h4>
                <small className='text-light'>El Juego del Caladrank</small>
              </div>
            </article>
            <article className='experience__details'>
              
              <div>
                <h4>DIA 4</h4>
                <small className='text-light'>Drankana</small>
              </div>
            </article>
            <article className='experience__details'>
              {/* <BsFillPatchCheckFill className='experience__details-icon' /> */}
              <div>
                <h4>DIA 5</h4>
                <small className='text-light'>Descansito</small>
              </div>
            </article>
            <article className='experience__details'>
              {/* <BsFillPatchCheckFill className='experience__details-icon' /> */}
              <div>
                <h4>DIA 6</h4>
                <small className='text-light'>Wedding Drank Ainara y Victor</small>
              </div>
            </article>
          </div>
        </div>
        {/* FINAL DE DIAS */}
        <div className="experience__backend">
          <h3>Noches</h3>
          <div className="experience__content">
            <article className='experience__details'>
              {/* <BsFillPatchCheckFill className='experience__details-icon' /> */}
              <div>
                <h4>NOCHE 1</h4>
                <small className='text-light'>Neon Drank Party</small><br />
                <small className='text-light'>Photocall</small>
              </div>
            </article>
            <article className='experience__details'>
              
              <div>
                <h4>NOCHE 2</h4>
                <small className='text-light'>Fiesta de Disfraces de Dibujos</small>
              </div>
            </article>
            <article className='experience__details'>
              
              <div>
                <h4>NOCHE 3</h4>
                <small className='text-light'>Drank's Game</small><br />
                <small className='text-light'>Party</small>
              </div>
            </article>
            <article className='experience__details'>
              
              <div>
                <h4>NOCHE 4</h4>
                <small className='text-light'>Disfraces con Tematica</small><br />
                <small className='text-light'>Torneo Baile Grupal</small>
              </div>
            </article>
            <article className='experience__details'>
              
              <div>
                <h4>NOCHE 5</h4>
                <small className='text-light'>Drinkgo</small><br />
                <small className='text-light'>Karaoke</small>
              </div>
            </article>
            <article className='experience__details'>
              
              <div>
                <h4>NOCHE 6</h4>
                <small className='text-light'>Drank Awards 2022</small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default zonaDos