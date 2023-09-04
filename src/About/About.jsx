import React from 'react'
import AboutLeft from './AboutLeft'
import AboutRight from './AboutRight'
import './about.css';
import Numbers from './Numbers';

export default function About() {
  return (
    <>
      <h2 className='text-center w-100'><b>About Me</b></h2>
      <div className='container'>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <AboutLeft />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-8">
            <AboutRight />
          </div>
        </div>
      </div>
    </>
  )
}
