import React from 'react';
import { useState } from 'react';
import Arrow_left from './Arrow_left.png';
import Arrow_right from './Arrow_right.png';
import './Carrousel.scss';

function Carrousel({ pictures }) {
    const [currentSlide, setCurrentSlide] = useState(0)



    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % pictures.length)
    }

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? pictures.length -1 : currentSlide -1)
    }

    const paging = `${currentSlide +1}/${pictures.length}`

    const alt= 'Photo du logement'

  return (
    <div>
        {pictures.length > 1 && (
            <div className='Carrousel'>
                <img src={Arrow_left} alt='Flèche de gauche' onClick={prevSlide} className='arrow_left' />
                <img src={pictures[currentSlide]} alt={alt} className='img_carrousel' />
                {//<div className='paging_carrousel'>{paging}</div>
}
                <img src={Arrow_right} alt='Flèche de droite' onClick={nextSlide} className='arrow_right' />
            </div>
        )}

        {pictures.length === 1 && 
            <img src={pictures[0]} className='img_carrousel' alt={alt} />
    }
    </div>
  )
}

export default Carrousel;