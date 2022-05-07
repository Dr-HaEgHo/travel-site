import React from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
      <div className='navBar'>
          <div className='container nav-cont'>
              <div className='logo-image'>
                <img src={Logo} alt='logo'></img>
              </div>
              <ul className='nav-items'>
                  <li>About Us</li>
                  <li>Support</li>
                  <li>Language</li>
              </ul>
              <div className='sign'>
                  <button className='btn-light'>Sign In</button>
              </div>
          </div>
    </div>
  )
}

export default Navbar