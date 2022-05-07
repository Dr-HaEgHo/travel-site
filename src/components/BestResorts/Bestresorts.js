import React from 'react'
import './bestresorts.css'
import Palms from '../../assets/palms.webp'
import Chalet from '../../assets/chalet.webp'
import Tropical from '../../assets/tropical.webp'
import SkiierDH from '../../assets/skiier-downhill.webp'

const Bestresorts = () => {
  return (
      <div className='best-resorts'>
          <div className='container card-box'>
              <div className='resort-cards'>
                  <div>
                      <h2>The best resorts to chill and relax</h2>
                  </div>
                  <div className='full-card' >
                      <div className='resort-card'>
                      <div className='resort-image'>
                          <div className='resort-hover'>
                              <div className='resort-content'>
                                  <h3>Winter Landscape Chalet</h3>
                                  <p>Cambodia</p>
                                  <button className='btn-resort'>Book Now</button>
                              </div>
                          </div>
                          <img src={Palms}></img>
                      </div>
                  </div>
                  <div className='resort-card'>
                      <div className='resort-image'>
                          <div className='resort-hover'>
                              <div className='resort-content'>
                                  <h3>Winter Landscape Chalet</h3>
                                  <p>Cambodia</p>
                                  <button className='btn-resort'>Book Now</button>
                              </div>
                          </div>
                          <img src={Tropical}></img>
                      </div>
                  </div>
                  </div>
              </div>
              <div className='full-card'>
                  <div className='resort-card'>
                      <div className='resort-image'>
                          <div className='resort-hover'>
                              <div className='resort-content'>
                                  <h3>Winter Landscape Chalet</h3>
                                  <p>Cambodia</p>
                                  <button className='btn-resort'>Book Now</button>
                              </div>
                          </div>
                          <img src={Chalet}></img>
                      </div>
                  </div>
                  <div className='resort-card'>
                      <div className='resort-image'>
                          <div className='resort-hover'>
                              <div className='resort-content'>
                                  <h3>Winter Landscape Chalet</h3>
                                  <p>Cambodia</p>
                                  <button className='btn-resort'>Book Now</button>
                              </div>
                          </div>
                          <img src={SkiierDH}></img>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Bestresorts