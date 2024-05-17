import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Cards.scss';

function CardsCollapse() {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        fetch('/Logements.json')
        .then((response) => response.json())
        .then(data => {
            setProperties(data)
        })
    }, [])

  return (
    <div className='gallery'>
        <div className='all_gallery'>
            {properties.map(property => ( // utilisation de "map" pour générer une liste d'éléments,
                                        //et "key" pour l'identification de chaque images.
                <div key={property.id} className='gallery_element'>
                    <h2 className='text_gallery'>{property.title}</h2>
                    <Link to={`./logement/${property.id}`}>
                        <img src={property.cover} alt={property.title} className='img_gallery' />
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CardsCollapse;