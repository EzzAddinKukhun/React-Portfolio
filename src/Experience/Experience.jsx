import React from 'react'
import { expTimeline } from '../fixed';
import TimelineView from '../TimelineView/TimelineView';


export default function Experience() {
    return (
        <TimelineView type={"Experiences"} timelineData={expTimeline} />
    )
}

