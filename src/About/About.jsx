import React from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'
import './about.css';
import Numbers from './Numbers';

export default function About() {
  return (
    <>
      <h2 className='text-center w-100'><b>About Me</b></h2>
      <div className='container d-flex flex-wrap'>
        <AboutLeft />
        <AboutRight />
        <Numbers />
      </div>
    </>
  )
}
