import React from "react"
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';


class HomeContent extends React.Component {
    render() {
        return (
            <div className="hero">
                <ul className="lang">
                    <li><a href="">FRA</a></li>
                    <li><a href="">ENG</a></li>
                </ul>

                <ul className="heroContent">
                <li><h1 className="heroTitle"> Antoine HOELLINGER</h1></li>

                <li><h2 className="heroSubtitle">
                        Services <span className="hero_textcontainer">
                        <span>
                            <span className="fr"> Spécialiste Digital </span>
                            <span className="fr"> AMOA </span>
                            <span className="fr"> PMO </span>
                            <span className="fr"> Dévelopeur web </span>
                        </span>
                    </span>
                    </h2>
                    </li>
                    <li>
                        <Link className="HomeButton" tag={Link} to="/about">
                            <FaGithub className="IconHomeButton" />
                            <p id="" className="TextHomeButton">A propos</p>
                        </Link>
                    </li>

                    </ul>

                <ul className="socialBlock">
                    <li><a href="https://www.linkedin.com/in/antoine-hoellinger/"><FaLinkedin /></a></li>
                    <li><a href="https://www.facebook.com/profile.php?id=100000294139004"><FaFacebook /></a></li>
                    <li><a href="https://github.com/savemyfiles"><FaGithub /></a></li>
                </ul>

            </div>
        )
    }
}



export default HomeContent

