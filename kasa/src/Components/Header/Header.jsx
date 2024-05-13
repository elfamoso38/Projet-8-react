import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo_Kasa from './Logo_Kasa.jpg';
import './header.scss';

function Header() {
  return (
    <div className='header'>
        <img src={Logo_Kasa} alt='logo Kasa' />
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
