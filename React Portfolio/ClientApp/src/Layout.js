import React, { Component } from 'react';
import NavMenu from './components/nav/NavMenu';
import Footer from './components/Footer';
import Nav from './components/nav/nav'



export class Layout extends Component {
    static displayName = Layout.name;
       

    render() {
    return (
        <div>
                    { <Nav /> }
                    { <NavMenu/> }
                    { this.props.children }
                    { <Footer/> }      
      </div>
    );
  }

}
