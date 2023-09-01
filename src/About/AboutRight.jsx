import React from 'react'
import './about.css';
import Button from '@mui/material/Button';
import Fade from 'react-reveal/Fade';
import { downloadMyCV } from '../fixed';
const PDF_CV_URL = 'http://localhost:3001/Ezz_Addin_Frontend_CV.pdf';

export default function AboutRight() {
    return (
            <Fade>
                <div className='about-right-container'>
                    <p className='about-me'>
                        My name is Ezz Addin Helal Kukhun, I am from Nablus, Palestine, I have a B.Sc degree in Computer Engineering from An-Najah National University. I am interested in Web development generally. Especially in Frontend Development.
                        I am passionate in this field, I have a good knowledge in HTML, CSS, JavaScript, Typescript, Bootstrap, React, and Redux. I have an ability to build projects from scratch. You can see my experience and my important projects in the attached CV.
                    </p>
                    <Button onClick={() => {
                        downloadMyCV(PDF_CV_URL)
                    }} id="download-cv-btn" className='mt-3' variant="contained"><i class="fa-solid fa-download"></i>CV</Button>

                </div>
            </Fade>
    )
}
