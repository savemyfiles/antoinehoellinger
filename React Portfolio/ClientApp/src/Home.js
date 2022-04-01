import React, { Component } from 'react';
import HomeContent from "./components/HomeContent";
import './Home.css';
import ParticleLogo from './components/particleLogo'

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (

            <div className='HomeMain'>
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

