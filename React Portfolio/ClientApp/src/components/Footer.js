import React, { Component } from 'react';
import './Footer.css';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';



export class Footer extends Component {
    static displayName = Footer.name;

render() {
    return (
        <footer className="">
            <ul className="footerInfo">
                <li><p>© 2022 Antoine HOELLINGER</p></li>
                <li> <a href="legal.php">Mentions légales</a></li>
                <li><a href="contact.php">Me Contacter</a></li>
            </ul>

            <ul className="">
                <li><a href="https://www.linkedin.com/in/antoine-hoellinger/"><FaLinkedin className="FooterIcon" /></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100000294139004"><FaFacebook className="FooterIcon" /></a></li>
                <li><a href="https://github.com/savemyfiles"><FaGithub className="FooterIcon" /></a></li>
                </ul>
     
        </footer>
        );
    }
}

export default Footer;
