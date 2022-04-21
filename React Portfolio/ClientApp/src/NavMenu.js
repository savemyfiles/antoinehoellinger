import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { Sling as Hamburger } from 'hamburger-react';
import Logo from './assets/images/IcoLogo.svg'
import { useTranslation } from "react-i18next";
import { FaLanguage } from 'react-icons/fa';



const NavMenu = (props) => {
    const { t, i18n } = useTranslation();

    const [fr, setFr] = useState('block')
    const [en, setEn] = useState(false)


    const changeLanguageHandlerEn = (e) => {
        setFr(true);
        setEn(false);
        i18n.changeLanguage("en");
    }

    const changeLanguageHandlerFr = (e) => {
        setEn(true);
        setFr(false);
        i18n.changeLanguage("fr");
            }

    const [isOpen, setOpen] = useState(false)

    document.querySelectorAll('#nav-items a').forEach(function (element) {
        element.addEventListener('click', () => {
            document.querySelector('#myNav').classList.add("menuClose");
            document.querySelectorAll('#nav-items').forEach(function (element) {
                element.classList.add("menuClose");
                element.classList.remove("menuOpen");
            })
           { setOpen(false) }
         })
    })

    //Navbar onscroll

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("navbar").style.transform = "translateY(0px)";
            document.getElementById("navbar").style.transition = "0.8s ease-out";
        } else {
            document.getElementById("navbar").style.transform = "translateY(-120px)";
            document.getElementById("navbar").style.transition = "1.4s ease-out";
            document.querySelectorAll('#nav-items').forEach(function (element) {
                element.classList.add("menuClose");
                element.classList.remove("menuOpen");
                { setOpen(false) }
            });
            prevScrollpos = currentScrollPos;
        }
    }

            return (

      <header>
        <div id="navbar" className="navbar">
                <ul className="logo">
                            <li> <Link tag={Link} to="/"> <img alt="Logo Antoine HOELLINGER"src={Logo}/> </Link></li>
                        </ul>
                        <div className="rightMenu">
                            <div className="custom-select" style={{ display: en ? 'flex' : 'none' }} >< FaLanguage /> <a onClick={changeLanguageHandlerEn}>English</a></div>
                            <div className="custom-select" style={{ display: fr ? 'flex' : 'none' }} >< FaLanguage /> <a onClick={changeLanguageHandlerFr}>Français</a></div>

                            <div className="pragmantic_button"><a href="https://www.pragmantic.biz/" target="blank_" >PRAGMANTIC</a><p className="partners">Partners</p></div>
                           <ul className="menu">
                            <Hamburger toggled={isOpen} toggle={setOpen} rounded color="white" onToggle={toggled => {
                                if (toggled) {
                                    document.querySelectorAll('#nav-items').forEach(function (element) {
                                        element.classList.remove("menuInit");
                                        element.classList.add("menuOpen");
                                        element.classList.remove("menuClose");
                                    })
                                    document.querySelector('#myNav').classList.remove("menuClose");
                         } else {
                                    document.querySelectorAll('#nav-items').forEach(function (element) {
                                        element.classList.add("menuClose");
                                        element.classList.remove("menuOpen");
                                        document.querySelector('#myNav').classList.add("menuClose");

                                    })
}                        }} />
                            </ul>
                            </div>
        </div>
      </header>
    );
}



export default NavMenu;