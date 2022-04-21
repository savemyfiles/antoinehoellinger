import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router';
import { Layout } from './Layout';
import { Home } from './Home';
import { about } from './about';
import { services } from './services';
import { contact } from './contact';
import { legal } from './legal';
import './App.css'


export default class App extends Component {
    static displayName = App.name;

    render() {

        return (


      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/services' component={services} />
        <Route path='/about' component={about} />
        <Route path='/contact' component={contact} />
        <Route path='/legal' component={legal} />
      </Layout>
    );
  }
}

