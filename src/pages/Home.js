import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
      <div className='headerContainer' style={{ backgroundImage: }}>
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
