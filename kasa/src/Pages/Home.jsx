import React from 'react';
import CardsCollapse from '../Components/Collapse/Cards';
import Banner from '../Components/Banner/Banner';
import Banner_1 from '../Image/Banner_1.jpg';
import './Home.scss';

function Home() {
  return (
    <>
    <div className='Home'>
        <Banner 
        image={Banner_1}
        alt="Photo d'un payge - mer et rochers"
        text="Chez vous, partout et ailleurs"/>
        <CardsCollapse />
    </div>
    </>
  );
};

export default Home;