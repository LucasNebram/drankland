import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
        <h1>¡Mira estos EPICOS apartados papá!</h1>
        <div className='cards__container'>
            <div className='cards_wrapper'>
                <ul className='cards__items'>
                    
                    <CardItem 
                    src='images/casa.jpg'
                    text='Explora la casa donde estarás una semana espectacular'
                    label='Hospedaje'
                    path='/#about'
                    />
                    <CardItem 
                    src='images/disco.jpg'
                    text='Infórmate sobre las actividades que realizaremos'
                    label='Fiesta'
                    path='/actividades'
                    />
                </ul>
                <ul className='cards__items'>
                    {/* <CardItem 
                    src='images/portada-menu.jpg'
                    text='Menú y lista de productos para una semana de pura fiesta'
                    label='Lista de compra'
                    path='/services'
                    /> */}
                    <CardItem 
                    src='images/calendario-semanal.jpg'
                    text='Calendario y Grupos de cocina'
                    label='Programación'
                    path='/grupos'
                    />
                    <CardItem 
                    src='images/icono-drank.jpg'
                    text='Conoce a los Organizadores y creadores de Drankland'
                    label='Organizadores'
                    path='/us'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards