import React from 'react';
import Logo from '../assets/logo.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='leftNav'>
        <img src={Logo} />
      </div>
      <div className='rightNav'></div>
    </div>
  )
}

export default Navbar
