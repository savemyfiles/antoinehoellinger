import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Form from './form'
import './contact.css'

export class contact extends Component {
    static displayName = contact.name;

    render() {
        return (
            <div className="main">

                <Helmet>
                    <title>Antoine HOELLINGER | Contact</title>
                </Helmet>

                <Form />


            </div>
        );
    }
}
