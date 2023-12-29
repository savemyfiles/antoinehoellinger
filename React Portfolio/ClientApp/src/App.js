import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router';
import { Layout } from './Layout';
import { Home } from './components/home/Home';
import { about } from './components/about/about';
import { services } from './components/services/services';
import { projects } from './components/projects/projects';
import { contact } from './components/contact/contact';
import { legal } from './components/legal/legal';
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
        <Route path='/projects' component={projects} />
      </Layout>
    );
  }
}

