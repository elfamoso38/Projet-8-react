import React from 'react';
import {useState, useEffect } from 'react';
import Collapse from '../Components/Collapse/Collapse';
import Carrousel from '../Components/Carrousel/Carrousel';
import Tags from '../Components/Tags/Tags';
import Host from '../Components/Host/host';
import './Logement.scss';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

function Logement() {
    const { id } = useParams();
    const nav = useNavigate();
   

    const [properties, setProperties] = useState([])

    useEffect(() => {
        fetch('/Logements.json')
        .then((response) => response.json())
        .then(data => {
            setProperties(data)
        })
    }, [id, nav])
    ;
 const currentApartment = properties.find((currentData) => currentData.id === id)
    if (currentApartment) {
       
   
        


  return (
    <div className='logement'>
        <Carrousel pictures={currentApartment.pictures} />
         
        <div className='LogementTitleHost'>
            <div>
                <h2 className='LogementTitle'>{currentApartment.title}</h2>
                <p className='Location_logement'>{currentApartment.location}</p>
                <Tags tags={currentApartment.tags} />
            </div>
            <div className='host_logement'>
                <Host host={currentApartment.host} />
            </div>
        </div>
            <div className='collapse_logement'>
                <Collapse
                    title='Description' 
                    content={currentApartment.description} />
                <Collapse
                    title='Equipements'
                    content={currentApartment.equipments} />
        </div>
    </div>
  )
} else {
   return <div><Navigate to='/error'/></div>;
}

}

export default Logement;