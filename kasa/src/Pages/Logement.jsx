import React from 'react';
import { useEffect, useParams } from 'react';
import Collapse from '../Components/Collapse/Collapse';
import Carrousel from '../Components/Carrousel/Carrousel';
import Tags from '../Components/Tags';
import Host from '../Components/host';
import './Logement.scss';
import { useNavigate } from 'react-router-dom';

function Logement() {
    const logementData = useParams("id");
    const nav = useNavigate();
    const currentApartment = Logement.filter(item => item.id === logementData);
    useEffect(() => {
        fetch("/Logements.json")
        .then(currentApartment => {
            if(!currentApartment.ok) {
                nav("./Error404")
            } else {
                return currentApartment.json();
            }
        })
    },[currentApartment, logementData, nav])
        
    
    
       
            

    


  return (
    <div className='logement'>
        <Carrousel image={logementData.pictures} />
        <div className='LogementTitleHost'>
            <div>
                <h2 className='LogementTitle'>{logementData.title}</h2>
                <p className='Location_logement'>{logementData.location}</p>
                <Tags tags={logementData.tags} />
            </div>
            <div className='host_logement'>
                <Host host={logementData.host} />
            </div>
        </div>
            <div className='collapse_logement'>
                <Collapse
                    title='Description' 
                    content={logementData.description} />
                <Collapse
                    title='Equipements'
                    content={logementData.equipments} />
        </div>
    </div>
  )
}

export default Logement;