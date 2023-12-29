import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import MySelf from './about/myself';
import Education from './about/education'
import Review from './about/review'
import Interview from './about/interview'
import './about.css'

export class about extends Component {
    static displayName = about.name;

    render() {
        return (
            <>
            <div>

                <Helmet>
                    <title>Antoine HOELLINGER | A Propos</title>
                </Helmet>

            </div>
        
            <div className="main">

                    < MySelf />
                    < Interview />

                    < Review />

                < Education />

                </div>
                </>
        );
    }
}