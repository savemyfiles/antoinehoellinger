import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Form from './components/contact/form'
import './components/contact/contact.css'

export class contact extends Component {
    static displayName = contact.name;

    render() {
        return (
            <div className="main">

                <Helmet>
                    <title>Antoine HOELLINGER | Contact</title>
                </Helmet>

                <div className="title">
                    <h1>Contact</h1>
                    <div className="subline"></div>
                </div>

                <Form />


            </div>
        );
    }
}
