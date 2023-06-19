import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/tradycyjna-najwyzsza-pizza-na-czarnym-kamieniu.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer' >
        <h1>Leonardo's Pizza</h1>
        <p>PIZZA SUPREME</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Home
