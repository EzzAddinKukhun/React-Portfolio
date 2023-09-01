import React from 'react'
import { numbersOfExp } from '../fixed';
import Zoom from 'react-reveal/Zoom';

export default function Numbers() {
    return (
        <div className="container mt-4">
            <div className="row g-3">
                {
                    numbersOfExp.map((element, key) => {
                        return (
                            <Zoom left delay={key*500}>
                                <div className="col-12 col-sm-12 col-md-4">
                                    <div className="exp-card">
                                        <h1><b>+{element.count}</b></h1>
                                        <h6>{element.name}</h6>
                                    </div>
                                </div>
                            </Zoom>
                        );
                    })
                }
            </div>
        </div>
    )
}
