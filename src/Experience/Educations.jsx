import React from 'react'
import { eduTimeline } from '../fixed';
import TimelineView from '../TimelineView/TimelineView';


export default function Experience() {
    return (
        <TimelineView type={"Education"} timelineData={eduTimeline} />
    )
}

