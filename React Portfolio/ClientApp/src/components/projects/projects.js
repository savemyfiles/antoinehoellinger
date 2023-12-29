import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import './projects.css';
import Invoices from './projects/invoices'

export class projects extends Component {

    static displayName = projects.name;

    render() {
        return (

            <div className="main">


                <Helmet>
                    <title>Antoine HOELLINGER | Projects</title>
                </Helmet>

   
                <Invoices />


            </div>
        );
    }
}