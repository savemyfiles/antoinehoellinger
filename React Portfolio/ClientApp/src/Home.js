import React, { Component } from 'react';
import HomeContent from "./components/HomeContent";
import './Home.css';
import ParticleLogo from './components/particleLogo';
import { Helmet } from 'react-helmet';


export class Home extends Component {


    render() {
        return (
            <div className='HomeMain'>
                <Helmet>
                    <title>Antoine HOELLINGER | Home</title>
                </Helmet>
                <ParticleLogo />
              <React.StrictMode>
                    <div className="heroBackground">
                        <HomeContent />
                    </div>
                                      </React.StrictMode>

                </div>
                         );
    }
}

