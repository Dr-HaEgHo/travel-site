import React from 'react'
import './footer.css'
import BluePlane from '../../assets/bluePlane.png'
import Fb from '../../assets/fb.png'
import Ig from '../../assets/ig.png'
import Twitter from '../../assets/twitter.png'

const Footer = () => {
  return (
      <div className='footer'>
          <div className='container'>
              <div>
                  <div className='footer-top'>
                      <div className='brand'>
                          <img src={ BluePlane } alt="blue variant of logo"></img>
                          <h4>Artic Travels</h4>
                          <p className='brand-p'>Book your trip in minutes, get full control for much longer.</p>
                          <div className='socials'>
                              <img src={Fb}></img>
                              <img src={Ig}></img>
                              <img src={Twitter}></img>
                          </div>
                          <p className='reserved'>© 2022 Arctic Travels - All right reserved.</p>
                      </div>
                      <div className='company'>
                          <p className='heads'>COMPANY</p>
                          <ul>
                              <li>About</li>
                              <li>Careers</li>
                              <li>Mobile</li>
                          </ul>
                          <p className='tiny'>Privacy Policy</p>
                      </div>
                      <div>
                          <p className='heads'>CONTACT</p>
                          <ul>
                              <li>FAQ</li>
                              <li>Press</li>
                              <li>Affiliates</li>
                          </ul>
                          <p className='tiny'>Terms of Use</p>
                      </div>
                      <div>
                          <p className='heads'>MORE</p>
                          <ul>
                              <li>Airlines</li>
                              <li>Airfees</li>
                              <li>Lowfare Tips</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Footer