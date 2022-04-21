import React from "react"
import { FaGithub, FaFacebook, FaLinkedin, FaRegCommentAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";



function  HomeContent() {


        const { t, i18n } = useTranslation();

        return (
            <div className="hero">
                <div className="lang">
                    <li><Link tag={Link} to="/contact">< FaRegCommentAlt /></Link></li>
                </div>

                <div className="heroContent">
                <h1 className="heroTitle"> Antoine <span className="color">HOELLINGER</span></h1>

                    <ul ><li className="heroSubtitle">
                        <div className="hero_textcontainer ">
                            <h2>Services</h2>
                        <ul className="dropping-texts">
                                <li>{t('Specialiste Digital')}</li>
                                <li>{t('MOA')}</li>
                                <li>{t('PMO')}</li>
                                <li>{t('Développeur web')}</li>

                                </ul>
                        </div>
                        </li>
                    <li>
                        <Link className="HomeButton" tag={Link} to="/about">
                                <div className="IconHomeButton"> <FaUser /> </div>
                                <p className="TextHomeButton">{t('A propos')}</p>
                        </Link>
                        </li>
                    </ul>

                    </div>

                <div className="socialBlock">
                    <li><a href="https://www.linkedin.com/in/antoine-hoellinger/"><FaLinkedin /></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100000294139004"><FaFacebook /></a></li>
                    <li><a href="https://github.com/savemyfiles"><FaGithub /></a></li>
                </div>

            </div>
        )
    }




export default HomeContent

