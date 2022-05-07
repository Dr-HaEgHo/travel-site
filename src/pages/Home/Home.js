import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Location from '../../assets/location.png'
import Darrow from '../../assets/arrow-down.png'
import Persons from '../../assets/User.png'
import Check from '../../assets/check-in-out.png'
import Plane from '../../assets/WhitePlane.png'
import './home.css'

const Home = () => {    

    const barItems = [
        {id: "1", title: "LOCATION", options: ["Nigeria","Iceland", "South Korea","France", "United Kingdom"], image: Location },
        {id: "2", title: "PERSONS", options: ["1 Person","2 Persons", "3 Persons","4 Persons", "5 Persons"], image: Persons },
        {id: "2", title: "CHECK IN", options: ["02 January 2020","03 January 2020", "04 January 2020","05 January 2020", "06 January 2020"], image: Check },
        {id: "2", title: "CHECK OUT ", options: ["02 January 2020","03 January 2020", "04 January 2020","05 January 2020", "06 January 2020"], image: Check },
    ]

    return (
      
      <div className='home'>
          <Navbar/>
          <div className='container'>
              <div className='hero-cont'>
                  <h1>Plan The Perfect Winter Trip</h1>
                  <p>Easily plan your ideal ski trip from home with the help of professionals</p>
                  <button className='btn-dark'>Book Now</button>
              </div>
          </div>
          <div className='container book-trip-bar'>
                {
                    barItems && barItems.map((barItem) => 
                       <div className='book-item'>
                  <div className='top'>
                      <img src={barItem.image} alt='ickp'></img>
                                <p>{ barItem.title }</p>
                  </div>
                  <div className='select'>
                      <select className='bottom'>
                                    <option>{ barItem.options[0] }</option>
                                    <option>{ barItem.options[1] }</option>
                                    <option>{ barItem.options[2] }</option>
                                    <option>{ barItem.options[3] }</option>
                                    <option>{ barItem.options[4] }</option>
                      </select>
                      <img src={Darrow} alt='pickt'></img>
                  </div>
              </div>  
                    )
             }
              <div className='btn-div-hero'>
                    <button className='btn-dark'>
                    <p>Book Now</p> 
                    <img src={Plane} alt='pickt'></img>
                    </button>
              </div>
          </div>
    </div>
  )
}

export default Home