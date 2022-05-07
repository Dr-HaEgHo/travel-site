import React from 'react'
import boxWoman from '../../assets/tourist.webp'
import Skiier from '../../assets/skiier.jpg'
import snowBoarder from '../../assets/snowboarder.jpg'
import './locations.css'

const Locations = () => {

    // const ourLocs = [
    //     {id: "1", image: boxWoman, title:'Mountain Resort'},
    //     {id: "2", image: snowBoarder, title:'Fuji Mountain'},
    //     {id: "3", image: Skiier, title:'Freezing WinterLake'},
    // ]
    const defaultState = () => {

        const div1 = document.getElementById('01');
        const div2 = document.getElementById('02');
        const div3 = document.getElementById('03');
        const resetBtn = document.getElementById('reset-btn');
        const headText = document.getElementById('head-text');
        
        headText.style.writingMode = 'vertical-lr';
        resetBtn.style.display = 'none'
        div1.style.width = '33.33%'
        div2.style.width = '33.33%'
        div3.style.width = '33.33%'
    }

    const makeFull = (e) => {
        
        let item = e.target;
        let nodes = item.childNodes;

        const div1 = document.getElementById('01'); 
        const div2 = document.getElementById('02');
        const div3 = document.getElementById('03');
        const resetBtn = document.getElementById('reset-btn');
        const headText = document.getElementById('head-text');



        item.style.width = '100%';
        headText.style.writingMode = 'horizontal-tb';

        if (div1.style.width == '100%') {
            resetBtn.style.display = 'block'
            div2.style.width = '0%'
            div3.style.width = '0%'
        } else if (div2.style.width == '100%') {
            resetBtn.style.display = 'block'
            div1.style.width = '0%'
            div3.style.width = '0%'
        }else if (div3.style.width == '100%') {
            resetBtn.style.display = 'block'
            div1.style.width = '0%'
            div2.style.width = '0%'
        }
        
     
        console.log(item)
        // console.log(nodes[0])
    }


  return (
      <div className='locations' >
          <div className='loc-container'>
                      <button id='reset-btn' onClick={defaultState} className='bk-btn'>◀</button>
                    <div id='01' onClick={makeFull} className='location'>
                  <img src={boxWoman} alt='Woman in the snow'></img>
                  <div className='loc-overlay'>
                      <h1 id='head-text'>Mountain Resort</h1>
                  </div>
              </div>
                    <div id='02' onClick={makeFull} className='location'>
                  <img src={snowBoarder} alt='snowboarder'></img>
                  <div className='loc-overlay'>
                      <h1 id='head-text'>Fuji Mountain</h1>
                  </div>
              </div>
                    <div id='03' onClick={makeFull} className='location'>
                  <img src={Skiier} alt='skiier'></img>
                  <div className='loc-overlay'>
                      <h1 id='head-text'>Freezing Mountain</h1>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default Locations