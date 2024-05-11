import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function CardsCollapse() {
    const [properties] = useState([])

  return (
    <div className='gallery'>
        <div className='all_gallery'>
            {properties.map(property => (
                <div key={property.id} className='gallery_element'>
                    <h2 className='text_gallery'>{property.title}</h2>
                    <Link to={`./logement/${property.title}`}>
                        <img src={property.cover} alt={property.title} className='img_gallery' />
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CardsCollapse