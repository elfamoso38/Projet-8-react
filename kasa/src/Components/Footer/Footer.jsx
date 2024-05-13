import React from 'react'
import './Footer.scss';
import Logo_footer from './Logo_footer.png';

function Footer() {
  return (
    <div className='footer'>
        <img src={Logo_footer} alt='logo Kasa' className='logo_footer' />
        <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer;