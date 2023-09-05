import React from 'react'
import './education.css'
import { eduTimeline } from '../fixed'
import EducationCenter from './EducationCenter'
import Fade from 'react-reveal/Fade';

export default function Education() {
    return (
        <>
            <h2  className='title text-center w-100 mb-4 '><b>Education</b></h2>
            <div id="edu" className="container">
                <div className="row">
                    {
                        eduTimeline.map((element, key) => {
                            return (
                                <Fade delay={600 * key}>
                                    <div className="col-12 col-sm-12 col-md-6">
                                        <EducationCenter element={element} />
                                    </div>
                                </Fade>
                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}
