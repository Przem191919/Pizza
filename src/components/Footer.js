import React from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import '../styles/Footer.css';


function Footer() {
  return (
    <div className='footer'>
      <div className='sMedia'>
        <FaInstagramSquare />
        <FaFacebookF />
        <FaTwitter />
        
        
      </div>
      <p>&copy; 2023 leonardopizza.com
      </p>
    </div>
  )
}

export default Footer
