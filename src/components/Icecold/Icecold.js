import React from 'react'
import './icecold.css'
import Map from '../../assets/map.png'
import LongArrow from '../../assets/long-arrow.png'

const Icecold = () => {
  return (
      <div className='icecold'>
          <div className='map'>
              <img src={Map} alt='MAP' ></img>
              <img className='arrow' src={LongArrow} alt='Long arrow facing down' ></img>
          </div>
          <div className='container cold'>
              <div className='ice'>
                  <h2>Creating the best <span>ice-cold!</span> experience you would never forget.</h2>
                  <p>Would you explore nature paradise in the world, find the best destination in the world with us.</p>

                  <h3>View Regions available</h3>
              </div>
              
          </div>
    </div>
  )
}

export default Icecold;