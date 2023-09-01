import React, { useEffect } from 'react'
import './HeaderStyle.css';
import { useState } from 'react';
import Typical from 'react-typical';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import HeaderButtons from './HeaderButtons';
import Addresses from './Addresses';

export default function AutoTyping() {
    return (
        <div className='typing-container'>
            <div className='typing'>
                <h1><b>Hi, I'm</b><span style={{ color: '#A5A6FF' }}><b> Ezz Addin</b></span></h1>
                <span className='text second-text'>
                    <Typical
                        loop={Infinity}
                        wrapper="b"
                        steps={[
                            'Computer Engineer',
                            2000,
                            'Software Engineer',
                            2000,
                            'Frontend Developer',
                            2000,
                        ]}
                    />
                </span>
                <h1><b>Based In Nablus</b></h1>
                <div className='basic-header-info'>
                    <p style={{ fontSize: 16 }}> I am a Computer Engineer with interests in Software Engineering, especially in Frontend Development.. </p>
                    <HeaderButtons />
                    <Addresses />

                </div>
            </div>
        </div>

    )
}
