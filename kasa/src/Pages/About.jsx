import React from 'react';
import Banner from '../Components/Banner/Banner';
import Banner_2 from '../Image/Banner_2.jpg';
import { collapseTextAbout } from '../Components/Collapse/CollapseTable';

function About() {
  return (
    <div className='about'>
      <Banner
        image={Banner_2}
        alt="photo d'un paysage - une vallée et des montagne enneigées" />
        {collapseTextAbout.map((item, index) => (
          <collapse
              key={index}
              title={item.title}
              content={item.content} /> 
        ))}
    </div>
  );
};

export default About;
