import React from 'react'
import Project from './Project'
import { projectsInformation } from '../fixed'
import Fade from 'react-reveal/Fade';

export default function Projects() {
    return (
        <div>
            <h2 className='text-center w-100 mb-4 mt-5'><b>My Projects</b></h2>
            <div className='container'>
                <div className="row g-5">
                    {
                        projectsInformation.map((element, key) => {
                            return (
                                <Fade delay={500 * key}>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                        <Project name={element.projectName} description={element.description} thumbnail={element.thumbnail} />
                                    </div>
                                </Fade>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}
