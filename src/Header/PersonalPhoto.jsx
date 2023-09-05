import React from 'react'
import './HeaderStyle.css';
// import img from '../../public/personal.png'; 
import img from '../Imgs/personal.png';
import Fade from 'react-reveal/Fade'
export default function PersonalPhoto() {
  return (
    <div className='photo-container'>
      <Fade right>
        <div className='circle-cover'>
          <img src={img} />
        </div>
      </Fade>
    </div>
  )
}
