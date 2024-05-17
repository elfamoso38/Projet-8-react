import React from 'react';
import Banner from '../Components/Banner/Banner';
import Banner_2 from '../Image/Banner_2.jpg';
import Collapse from '../Components/Collapse/Collapse';
import  collapseTextAbout  from '../Components/Collapse/CollapseTable.json';

function About() {
  return (
    <div>
      <Banner
        image={Banner_2}
        alt="photo d'un paysage - une vallée et des montagne enneigées" />
        {collapseTextAbout.map((item, index) => (
          <Collapse
              key={index}
              title={item.title}
              content={item.content} /> 
        ))}
    </div>
  );
};

export default About;
