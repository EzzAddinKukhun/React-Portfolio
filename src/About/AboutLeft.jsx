import React from 'react'
import './about.css';
import Typical from 'react-typical';
import Button from '@mui/material/Button';
import Fade from 'react-reveal/Fade';

export default function AboutLeft() {
    return (
        <Fade>
            <div className='about-left-container'>
                <div className='text-center'>
                    <p>-NICE TO MEET YOU</p>
                    <h4><b>Ezz Addin H. Kukhun</b></h4>
                    <span className='about-left-first-span'> Computer Engineer & </span>
                    <span className='about-left-second-span'>
                        <Typical
                            loop={Infinity}
                            wrapper="b"
                            steps={[
                                'Software Engineer',
                                2000,
                                'Frontend Developer',
                                2000,
                                'Teamwork',
                                2000,
                                'High-organized',
                                2000,
                                'Self-motivated',
                                2000,
                            ]}
                        />
                    </span>
                </div>
                <Button id="got-project-btn" className='w-50 mt-2' variant="contained">Got a project?</Button>
            </div>
        </Fade>
    )
}
