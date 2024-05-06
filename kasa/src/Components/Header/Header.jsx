import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <nav>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/About.jsx">
                    <li>À propos</li>
                </NavLink>
                
            </ul>
        </nav>
    </div>
  );
};

export default Header;
