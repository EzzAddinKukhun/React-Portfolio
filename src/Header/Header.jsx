import React from 'react'
import AutoTyping from './AutoTyping'
import PersonalPhoto from './PersonalPhoto'
import './HeaderStyle.css'; 

export default function Header() {
    return (
        <div className='container d-flex w-100 flex-wrap vh-100'>
            <AutoTyping/>
            <PersonalPhoto/>
        

        </div>
    )
}
