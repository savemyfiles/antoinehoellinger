import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Experience from './components/services/experience'
import Services from './components/services/services'
import Skills from './components/services/skills'
import './components/services/services.css';

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