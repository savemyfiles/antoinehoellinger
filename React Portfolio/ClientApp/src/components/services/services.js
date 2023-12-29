import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Experience from './services/experience'
import Services from './services/services'
import Skills from './services/skills'
import './services.css';

export class services extends Component {
    static displayName = services.name;

    render() {
        return (

            <div className="main">

                <Helmet>
                    <title>Antoine HOELLINGER | Services</title>
                </Helmet>

                < Skills />
                < Services />
                < Experience />

            </div>
        );
    }
}