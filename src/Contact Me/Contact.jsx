import React from 'react'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'
import './contact.css'; 

export default function Contact() {
    return (
        <>
            <h2 className='text-center w-100 mb-4 mt-5 '><b>Contact</b></h2>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-7">
                        <ContactLeft />
                    </div>
                    <div className="col-12 col-sm-12 col-md-5">
                        <ContactRight />
                    </div>
                </div>
            </div>
        </>
    )
}
