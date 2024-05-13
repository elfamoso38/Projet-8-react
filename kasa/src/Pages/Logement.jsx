import React from 'react';
import { useState } from 'react';
import Collapse from '../Components/Collapse/Collapse';
import Carrousel from '../Components/Gallery';
import Tags from '../Components/Tags';
import Host from '../Components/host';
import './Logement.scss';

function Logement() {
    const [logementData,] = useState(null)

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

export default Logement