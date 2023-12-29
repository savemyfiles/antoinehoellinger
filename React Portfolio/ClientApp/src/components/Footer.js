﻿import React, { Component } from 'react';
import './Footer.css';
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


const Footer = () => {

    const { t, i18n } = useTranslation();

    return (
        <footer className="">
            <ul className="footerInfo">
                <li><p>© 2022 Antoine HOELLINGER</p></li>
                <li> <Link tag={Link} to="/legal">{t('Mentions légales')}</Link></li>
                <li><Link tag={Link} to="/contact">{t('Me contacter')} </Link></li>

            </ul>

            <ul className="">
                <li><a href="https://www.linkedin.com/in/antoine-hoellinger/"><FaLinkedin className="FooterIcon" /></a></li>
                <li><a href="https://www.facebook.com/profile.php?id=100000294139004"><FaFacebook className="FooterIcon" /></a></li>
                <li><a href="https://github.com/savemyfiles"><FaGithub className="FooterIcon" /></a></li>
                </ul>
     
        </footer>
        );
}

export default Footer;
