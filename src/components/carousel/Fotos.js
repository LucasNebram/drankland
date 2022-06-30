import React, { Component } from 'react'
import 'slick-carousel/slick/slick-theme.css'
import './Fotos.css'

import Slider from 'react-slick'

export default class SimpleSlider extends Component {
    render() {
      const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      return (
        <div className='fotos'>
          <Slider {...settings}>
          <div>
            <img src="images/drank-1.jpg"  alt='Imagonolo' width={1000} height={300} className='img_foto' />
          </div>
          <div>
            <img src="images/drank-2.jpg"  alt='Imagonolo' width={1000} height={300} className='img_foto' />
          </div>
          <div>
            <img src="images/drank-3.jpg"  alt='Imagonolo' width={1000} height={300} className='img_foto' />
          </div>
          <div>
            <img src="images/drank-4.jpg"  alt='Imagonolo' width={1000} height={300} className='img_foto' />
          </div>
        </Slider>
        </div>
      );
    }
  }