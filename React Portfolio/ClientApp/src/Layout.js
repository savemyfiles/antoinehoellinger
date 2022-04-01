import React, { Component } from 'react';
import NavMenu from './NavMenu';
import Footer from './components/Footer';
import Nav from './components/nav'



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
