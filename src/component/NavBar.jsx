import React from 'react'

function NavBar() {
  return (
    <header>
        <div className="logo">Hend Foods</div>
        <nav>
          <ul>
            <li> <a href="#home">Home</a> </li>
            <li><a href="#about">About us</a></li>
            <li><a href="#explore">Explore Foods</a></li>
            <li><a href="#reviews">Reviews</a></li>
            {/* <li>FAQ</li> */}
            {/* <button>1800 789 123</button> */}
          </ul>
        </nav>
    </header>
  )
}

export default NavBar
