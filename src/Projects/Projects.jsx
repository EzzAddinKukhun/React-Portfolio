import React from 'react'
import Project from './Project'
import { projectsInformation } from '../fixed'
import Fade from 'react-reveal/Fade';
import CustomizedDialogs from '../Dialog/CustomizedDialogs';

export default function Projects() {
    const [open, setOpen] = React.useState(false);
    const [projectInformation, setProjectInformation] = React.useState({}); 

    const handleClickOpen = (element) => {
      setOpen(true);
      setProjectInformation(element);
    };

    const handleClose = () => {
      setOpen(false);
    };
  
    return (
        <>
        <div>
            <h2 className='title text-center w-100 mb-4'><b>My Projects</b></h2>
            <div id="projs" className='container'>
                <div className="row g-5">
                    {
                        projectsInformation.map((element, key) => {
                            return (
                                <Fade delay={500 * key}>
                                    <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                                        <Project element={element} openDialog={()=>handleClickOpen(element)} />
                                    </div>
                                </Fade>
                            );
                        })
                    }
                </div>
            </div>
        </div>
        <CustomizedDialogs open={open} closeDialog={handleClose} projectInformation = {projectInformation}/>
        </>
    )
}
