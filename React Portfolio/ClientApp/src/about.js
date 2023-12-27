import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import MySelf from './components/about/myself';
import Education from './components/about/education'
import Review from './components/about/review'
import Interview from './components/about/interview'
import './components/about/about.css'

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