import React from 'react'
import about1 from '../assets/1.png'
import about2 from '../assets/2.png'
function About() {
  return (
    <>
    <div className='about' id="about">
      <img src={about1} alt="about "/>
      <div>
        <h2>We pride ourselves on making real food from the best ingredients.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu et arcu ultricies efficitur. In hac habitasse platea dictumst. Donec consectetur, nunc non consectetur tristique, metus justo vulputate odio, ut placerat dui velit sed velit.</p>
        <button className="btn">Learn More</button>
      </div>
    </div>
    <div className='about'>
      <div>
        <h2>We make everything by hand with the best possible ingredients.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel arcu et arcu ultricies efficitur. In hac habitasse platea dictumst. Donec consectetur, nunc non consectetur tristique, metus justo vulputate odio, ut placerat dui velit sed velit.</p>
        <ul>
            <li>Etiam sed dolor ac diam volutpat.</li>
            <li>Erat volutpat aliquet imperdiet.</li>
            <li>purus a odio finibus bibendum.</li>
        </ul>
        <button className="btn">Learn More</button>
      </div>
      <img src={about2} alt="about "/>
    </div>
    <div className='aboutImg'>
        <h2>When a man's stomach is full it makes no
        difference whether he is rich or poor.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
        finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
        <button className='btn'>Watch Our Story</button>
    </div>
    </>
  )
}

export default About
