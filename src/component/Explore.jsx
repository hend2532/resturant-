import React from 'react'
import explore1 from "../assets/01.jpg"
import explore2 from "../assets/02.jpg"
import explore3 from "../assets/03.jpg"
function Explore() {
  return (
    <>
    <div className='explore' id="explore">
      <h2>Explore Our Foods</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
    </div>
    <div className='Cards'>
        <div className='card'>
            <img src={explore1} alt="food" />
            <h3>Rainbow Vegetable Sandwich</h3>
            <p>Time: 15 - 20 Minutes | Serves: 1</p>
            <h2>$10.50 <span> $11.70</span></h2>
            <button className='btn'>Order Now</button>
        </div>
        <div className='card'>
            <img src={explore2} alt="food" />
            <h3>Vegetarian Burger</h3>
            <p>Time: 30 - 45 Minutes | Serves: 1</p>
            <h2>$9.20 <span> $10.50</span></h2>
            <button className='btn'>Order Now</button>
        </div>
        <div className='card'>
            <img src={explore3} alt="food" />
            <h3>Raspberry Stuffed French Toast</h3>
            <p>Time: 10 - 15 Minutes | Serves: 1</p>
            <h2>$12.50 <span> $13.20</span></h2>
            <button className='btn'>Order Now</button>
        </div>
    </div>
    </>
  )
}

export default Explore
