import React from 'react'

function Home() {
  return (
    <>
    <div className='home' id="home">
      <h1>Good food choices are good investments.</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Etiam et purus a odio finibus bibendum amet leo.</p>
        <button className='btn'>Order Now</button>
        <button>Learn More</button>
    </div>
    <div className="total">
      <div>
      <h1>1287+</h1>
      <h2>Savings</h2>
      </div>
      <div>
      <h1>5786+</h1>
      <h2>Photos</h2>
      </div>
      <div>
      <h1>1440+</h1>
      <h2>Rockets</h2>
      </div>
      <div>
      <h1>7110+</h1>
      <h2>Globes</h2>
      </div>
    </div>
    </>
  )
}

export default Home
