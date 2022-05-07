import React from 'react'
import './prefooter.css'
import womanSkating from '../../assets/woman-skating.jpg'

const Prefooter = () => {
  return (
      <div className='prefooter'>
          <div className='loc-container'>
              <div className='prefooter-image'>
                  <div className='prefooter-overlay'>
                      <div className='prefooter-content'>
                          <h2>View Passes We’ve Made Available For You</h2>
                      <button className='btn-dark btn-pft'>View Passes</button>
                      </div>
                  </div>
                  {/* <img src={womanSkating} alt='skating woman'></img> */}
                </div>
          </div>
    </div>
  )
}
export default Prefooter
