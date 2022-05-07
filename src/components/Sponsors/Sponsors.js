import React from 'react'
import './sponsors.css'
import Nike from '../../assets/Nike.png'
import ApplePay from '../../assets/applePay.png'
import Silverstar from '../../assets/silver.png'
import Intrax from '../../assets/intrax.png'
import Mastercard from '../../assets/mastercard.png'

const Sponsors = () => {
  return (
      <div className='sponsors'>
          <div className='container '>
              <div className='brands'>
                  <img src={Nike} alt='NIKE'></img>
                  <img src={ApplePay} alt='Apple'></img>
                  <img src={Silverstar} alt='Silver'></img>
                  <img src={Intrax} alt='Intrax'></img>
                  <img src={Mastercard} alt='Mastercard'></img>
            </div>
          </div>
      </div>
      
  )
}

export default Sponsors