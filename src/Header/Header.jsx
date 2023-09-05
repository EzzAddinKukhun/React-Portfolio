import React from 'react'
import AutoTyping from './AutoTyping'
import PersonalPhoto from './PersonalPhoto'
import './HeaderStyle.css';

export default function Header() {
    return (
        <div className="header">
            <div className='container'>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-8">
                        <AutoTyping />
                    </div>
                    <div className="col-12 col-sm-12 col-md-4">
                        <PersonalPhoto />
                    </div>
                </div>

            </div>
        </div>

    )
}
