import React from 'react'
import './HeaderStyle.css'; 
import img from '../Imgs/personal.png'; 
export default function PersonalPhoto() {
  return (
    <div className='photo-container'>
      <div className='circle-cover'>
        <img src={img}/>
      </div>
    </div>
  )
}
