import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <div className='header'>
        <nav>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/About">
                    <li>À propos</li>
                </NavLink>
                
            </ul>
        </nav>
    </div>
  );
};

export default Header;
