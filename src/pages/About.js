import React from 'react';
import MultiplePizza from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizza})`}}></div>
      <div className='aboutBottom'>
        <h1>ABOUT US</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget est id erat congue pharetra. Ut id diam at sem blandit fringilla sed ut elit. Donec nunc nisi, hendrerit a nunc aliquam, suscipit lacinia massa. In in pellentesque sapien, vitae porttitor nisl. Maecenas sed leo quis metus condimentum pretium. Vestibulum urna nunc, pharetra eget orci et, dapibus fermentum mi. Maecenas mollis vestibulum blandit. Sed quis sagittis lectus. Donec volutpat id sem ut feugiat. Pellentesque condimentum consectetur felis ac posuere. Ut pellentesque metus urna, ac efficitur nulla pretium id. Phasellus in nibh fringilla, mattis tortor ac, ullamcorper libero. Sed id ipsum euismod, pretium ligula volutpat, ultrices metus. Duis augue lorem, ornare ac tellus non, tempor ultrices dui. 
        </p>
      </div>
    </div>
  )
}

export default About
