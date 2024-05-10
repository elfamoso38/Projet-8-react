import React from 'react';
import './Banner.scss';

function Banner({image, alt, text}) {

  return (
    <div className='banner'>
      <img src={image} alt={alt} className="banner_img" />
      <h1 className='banner_text'>{text}</h1>
    </div>
  )
}

export default Banner