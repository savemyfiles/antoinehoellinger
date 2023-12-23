import React, {useState} from "react"
import { FaBuilding, FaLuggageCart, FaLandmark, FaTimes } from 'react-icons/fa';
import Finance from './experience/finance'
import Freelance from './experience/freelance'
import Startup from "./experience/startup";
import Tourism from "./experience/tourism";
import { useTranslation } from "react-i18next";


function Experience(props) {

    const { t, i18n } = useTranslation();
    const [display, setDisplay] = useState('none')
    const [displaytwo, setDisplaytwo] = useState("none")
    const [displaythree, setDisplaythree] = useState("none")
    const [displayfour, setDisplayfour] = useState("none")
    const [isActive, setisActive] = useState(false)

    const handleStartUp = () => {

        setDisplay(true);
        setDisplaytwo(false);
        setDisplaythree(false);
        setDisplayfour(false);
        setisActive(true);
    };

    const handleTourism = () => {
        setDisplay(false);
        setDisplaytwo(true);
        setDisplaythree(false);
        setDisplayfour(false);
        setisActive(true);
    };


    const handleBank = () => {
        setDisplay(false);
        setDisplaytwo(false);
        setDisplaythree(true);
        setDisplayfour(false);
        setisActive(true);
    };

    

    const handleFinance = () => {
        setDisplay(false);
        setDisplaytwo(false);
        setDisplaythree(false);
        setDisplayfour(true);
        setisActive(true);
    };


    const exit = () => {
        setisActive(false);
    };


        return (

            <div>
                <div className={isActive ? "detailsOn" : "detailsOff"}>
                    <div className="Exit" onClick={exit}>< FaTimes /></div>

                    <div style={{ display: display ? 'block' : 'none' }}>
                        <Startup />
                    </div>
                    <div style={{ display: displaytwo ? 'block' : 'none' }}>
                        <Tourism />
                    </div>
                    <div style={{display: displaythree ? 'block' : 'none' }}>
                        <Freelance />
                    </div>
                    <div style={{ display: displayfour ? 'block' : 'none' }}>
                        <Finance />
                    </div>
                                    </div>
                <h2>{t("Mes précendents domaines")}</h2>

                <div className="experience">

                    <div className="card" onClick={handleStartUp}>
    < FaBuilding className="servicesIcons"/>
    <h3>Start-up</h3>
    <h4>2018 - 2019</h4>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
    </div>
                    <div className="circle">
                            <p>{t("Differentes experiences pour des entreprises naissantes")} :</p>  <ul><li>Webmaster,</li><li>{t("Réalisation de supports digitaux et print.")}</li></ul>
    </div>
  </div>

                    <div className="card" onClick={handleTourism}>
                    < FaLuggageCart className="servicesIcons" />
    <h3>{t("Tourisme")}</h3>
    <h4>2020 - 2021</h4>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
    </div>
                    <div className="circle">
                            <p>{t("Tourisme")} </p> <ul><li>{t("Suivi et plannification des actions projet")},</li><li>{t("Gestion des ressources")},</li><li>{t("Réalisation des specs")}.</li></ul>
    </div>
  </div>



                    <div className="card" onClick={handleBank}>
                        < FaLandmark className="servicesIcons" />
                          <h3>{t("Banque")}</h3>
                           <h4>2021 - 2023</h4>
                            <div className="bar">
                        <div className="emptybar"></div>
                            <div className="filledbar"></div>
                          </div>
                          <div className="circle">
                            <p>{t("PMO d'un portefeuille projet IT pour une filliale d'un grand groupe bancaire pendant 4 mois avant de devenir chargé de projets digitaux")} : </p><ul><li>{t("Administrateur Salesforce")},</li> <li>Webmaster,</li><li>{t("Acteur dans la transformation du SI")}.</li></ul>
                              </div>
                    </div>

                    <div className="card" onClick={handleFinance}>
                        < FaLandmark className="servicesIcons" />
                        <h3>{t("Finance")}</h3>
                        <h4>2022 - {t("Aujourd'hui")}</h4>
                        <div className="bar">
                            <div className="emptybar"></div>
                            <div className="filledbar_half"></div>
                        </div>
                        <div className="circle">
                            <p>{t("En charge de la gestion et du suivi d'un projet de migration majeur de Paas à IaaS, couvrant neuf pays et englobant plus de dix applications, un middleware, et un CBS (Core Model).")}</p>
                            <p>{t("Préstation dans le cadre d’un déploiement Core Model ( comprenant 1 CBS, une 10ène d'applications connexes, 1 middleware, ... ) à l’international ( 9 pays ), en tant que PMO Central pour")} : </p>
                            <ul>
                                <li>{t("Superviser et suivre les tâches")},</li>
                                <li>{t("Maitriser le planning du programme")}.</li>
                                <li>{t("Dans les instances de suivi des projets, identifier les risques, suivre les actions et les escalades.")}.</li>
                            </ul>
                        </div>
                    </div>
                </div>



            </div>
        )
    }

export default Experience