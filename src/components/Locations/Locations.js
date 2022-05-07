import React from 'react'
import boxWoman from '../../assets/tourist.webp'
import Skiier from '../../assets/skiier.jpg'
import snowBoarder from '../../assets/snowboarder.jpg'
import './locations.css'

const Locations = () => {

    const ourLocs = [
        {id: "1", image: boxWoman, title:'Mountain Resort'},
        {id: "2", image: snowBoarder, title:'Fuji Mountain'},
        {id: "3", image: Skiier, title:'Freezing WinterLake'},
    ]

  return (
      <div className='locations'>
          <div className='loc-container'>
              {
                  ourLocs && ourLocs.map((ourLoc) =>
                    <div className='location'>
                  <img src={ourLoc.image} alt='Woman in the snow'></img>
                  <div className='loc-overlay'>
                      <h1>{ourLoc.title}</h1>
                  </div>
              </div>
                  )
              }
          </div>

    </div>
  )
}

export default Locations