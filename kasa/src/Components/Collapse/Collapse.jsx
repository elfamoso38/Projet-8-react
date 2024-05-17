import React from 'react';
import { useState } from 'react';
import './Collapse.scss';
import arrow_back from './arrow_back.png';

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)
    const switchCollapse = () => {
        setIsOpen(!isOpen)
    }

  return (
    <div className='all_collapse'>
        <div className='collapse_item'>
            <div className='collapse'>
                <h3 className='title_collapse'>{title}</h3>
                <img src={arrow_back} alt='Flèche vers le haut' className={`arrow_back ${isOpen ? "rotate": ""}`} onClick={switchCollapse} />
            </div>
        </div>
        
        <div className={`collapse_content ${isOpen ? "expand": "collapsed"}`}>
            {Array.isArray(content) ? (
                <ul className='list_collapse'>
                    {content.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p className='collapse_content_p'>{content}</p>
            ) }
        </div>
    </div>
  )
}

export default Collapse;