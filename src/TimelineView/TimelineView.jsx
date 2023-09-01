import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Fade from 'react-reveal/Fade';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import { downloadMyCV } from '../fixed';
import Button from '@mui/material/Button';
import './timeline.css'

export default function TimelineView({ type, timelineData }) {
    return (
        <>
            <h2 className='text-center w-100 mb-4 mt-5'><b>{type}</b></h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-12 col-sm-12">
                        <Timeline
                            sx={{
                                [`& .${timelineOppositeContentClasses.root}`]: {
                                    flex: 0.2,
                                },
                            }}
                        >
                            {
                                timelineData.map((element, key) => {
                                    return (
                                        <Fade delay={key*500}>
                                            <TimelineItem>
                                                <TimelineOppositeContent color="textSecondary">
                                                    <h6 style={{ color: ' #FF972D' }}>{element.startDate} - {element.endDate}</h6>
                                                </TimelineOppositeContent>
                                                <TimelineSeparator>
                                                    <TimelineDot />
                                                    <TimelineConnector />
                                                </TimelineSeparator>
                                                <TimelineContent>
                                                    <div className="exp">
                                                        <div className='exp-header'>
                                                            <h5 className='mt-2'><b>{element.expName}</b></h5>
                                                            <h6 className='mt-2'>{element.companyName}</h6>
                                                        </div>
                                                        <p className='exp-desc'>{element.Description}</p>
                                                        {
                                                            element.urlFile != null ? <Button onClick={() => downloadMyCV(element.urlFile)} style={{
                                                                backgroundColor: '#130F49',
                                                                position: 'absolute',
                                                                bottom: '6%',
                                                                right: '2%'
                                                            }} className='exp-btn' variant="contained">View</Button> : ""
                                                        }

                                                    </div>
                                                </TimelineContent>
                                            </TimelineItem>
                                        </Fade>
                                    );
                                })
                            }


                        </Timeline>
                    </div>
                </div>
            </div>

        </>
    )
}
