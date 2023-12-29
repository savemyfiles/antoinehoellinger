import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './legal.css';




export class legal extends Component {
    static displayName = legal.name;

    render() {
        return (
            <div className="main">

                <Helmet>
                    <title>Antoine HOELLINGER | Contact</title>
                </Helmet>

                <div className="title">
                    <h1>Mentions légales</h1>
                    <div className="subline"></div>
                </div>

                <div className="legal">
                    <p>Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l’économie numérique, il est précisé aux utilisateurs de ce site l’identité des différents intervenants dans le cadre de sa réalisation et de son suivi.</p>
                </div>

                <div className="legal">
                    <h3> Identité </h3>
                    <p>Ce site internet est géré et édité par Antoine HOELLINGER.</p>
                </div>

                <div className="legal">
                    <h3> Coordonées </h3>
                    <p> Pour tout type d'information, vous pouvez me contacter par :</p>
                    <ul>
                        <li> Lieu : Paris  </li>
                        <li> N° de téléphone : <p id="showPhone"> Cliquer pour voir </p> <p id="phone" className="off"></p></li>
                            <li> Adresse e-mail : <p id="showEmail"> Cliquer pour voir </p> <p id="email" className="off"></p></li>
                                 </ul>
                                    </div>

                            <div className="legal">
                                <h3> Mentions relatives à l'hébergement du site</h3>
                                <p> Identité </p>
                            </div>

                            <div className="legal">
                                <h3> Mentions commerciales</h3>
                                <p>L'activité associé à l'auto-entreprise "Antoine HOELLINGER" est identifiée sous les caractères suivants :  </p>
                                <ul>
                                    <li>Date de création : 03/11/2020</li>
                                    <li>NAF : 6201Z PROGRAMMATION INFORMATIQUE</li>
                                    <li>N° SIRET  : 89068921900016 02  </li>
                                </ul>
                            </div>

                            <div className="legal">
                                <h3>Crédit d'inspiration</h3>
                                <ul>
                                    <li>
                                        <a href="http://exill.dk/demo/kitzu/template/index.html" target="_blank">Le Portfolio d'Emma Smith </a>
                        </li>
                        <li>
                            <a href="https://blog.stackfindover.com/" target="_blank">Animations des textes</a>
                        </li>                    </ul>
                            </div>



            </div>
        );
    }
}