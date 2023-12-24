import React from "react"
import { useTranslation } from "react-i18next";


function Freelance(props) {

    const { t, i18n } = useTranslation();


        return (
            <>
                <h1>{t("Mon Experience en Start-up")}</h1>
                <h2>{t("Mission dans un filiale d'un grand groupe bancaire")}</h2>
            <div className="container">
                    <div className="descriptionLeft imageExp" id="it" >
                    </div>
                    <div className="descriptionRight">
                        <p>{t("En tant que Project / Program Manager, mon domaine d'intervention et d'expertise comprend toutes les missions liées à la gestion de projets informatiques que l'entreprise soit en transition ou en mode projet")} :</p>
                < ul >
                            <li>{t("Mise en place du CRM (cahier des charges, demandes de devis, planning, budget, gestion, etc.)")}</li>
                            <li>{t("Stratégies omnicanales ( Exigences du besoin, analyse fonctionnelle, suivi de projet )")}</li>
                            <li>{t("Organisations du projet (structure, ressources, jalons, livrables, etc.)")}</li>
                            <li>{t("Gouvernance du projet (comité de pilotage, analyse des risques, etc.)")}</li>
                            <li>{t("Conduite du changement (transition, processus, formation, accompagnement, etc.)")}</li>
                        </ul >

                        <p>{t("En tant que spécialiste numérique dans le projet de transformation informatique globale pour un établissement de crédit national, j'ai dû aider l'équipe technique sur des projets qui nécessitaient des connaissances techniques")} :</p>
        <ul>
                            <li>{t("Configuration, paramétrage & support CRM : paramètres Salesforce & APEX.")}</li>
                            <li>{t("Webmaster du site ( HTML, CSS, Symfony (PHP) )")}</li>
                            <li>{t("Suivi, analyse et reporting des données à l'aide d'outils BI.")}</li>
                            <li>{t("Equipe de documentation technique et d'assistance à la formation.")}</li>
                        </ul>{t("En tant que support technique et ressource projet sur un groupe refondant toute sa structure informatique, j'étais chargé de")} :
            < ul >
                            <li>{t("Exploitation et mises à jour du CRM et du site web")}</li>
                    <li>{t("Rédaction de spécifications pour l'équipe commerciale et technique pour la feuille de route de transformation incluant l'entrepôt de données, les outils omnicanaux, la BI.")}</li>
                        </ul >
                        <a className="button" href="https://www.pragmantic.biz/">{t("En savoir plus")}</a>

                </div>
                    </div>

            <div className="container">

                <div className="descriptionRightTwo">
                        <h2>{t("J'y étais")} !</h2>

                        <div className="descrText">
                            <h3>Salesforce World Tour Paris 2022 </h3>
                        <h4>Paris | 29-03-2022</h4>
                            <p>{t("Grand événement annuel en France, le Salesforce World Tour Paris. Pour vous faire profiter au maximum et personnaliser votre programme, nous proposons plusieurs conférences plénières. Celles-ci aborderont les grands enjeux de votre business : tendances du BtoC, du BtoB, les défis d’une entreprise en hypercroissance ou encore les priorités stratégiques des grands groupes")}</p>
                    </div>
                        <a className="button" href="https://www.salesforce.com/fr/events/salesforce-world-tour-paris-2022/?dysig_tid=e7aaf5c37a664761a9ee96c441b601fd">{t("En savoir plus")}</a>
                    </div>

                    <div className="descriptionLeftTwo imageExp" id="worldtour" >
                    </div>
                </div>

                <div className="container">


                    <div className="descriptionRight imageExp">

                    <div className="descrText"> 
                        <h3>Salesforce Dreamforce 2021 </h3>
                        <h4>Paris</h4>
                            <p>{t("Rediffusion de l'évennement Salesforce à Paris. Dreamforce est un événement annuel de quatre jours qui rassemble l'ensemble de la communauté Salesforce. Il s'agit d'une expérience qui célèbre les pionniers et la réussite des clients. Dreamforce est l'endroit où les pionniers du monde entier se réunissent pour partager leurs histoires, leurs réussites et apprendre les uns des autres. En général, Dreamforce a lieu pendant l'automne, de septembre à novembre à San Francisco, en Californie, sur plusieurs sites")}. ( source : <a className="aoff" href="https://www.blurec.fr/blog/2021/05/dreamforce-levenement-annuel-de-salesforce">blurec.fr</a> )</p>
                    </div>
                    <a className="button" href="https://www.salesforce.com/plus/experience/Dreamforce_2021/">{t("En savoir plus")}</a>


                </div>
                    <div className="descriptionLeftTwo imageExp" id="dreamforce"></div>
                </div>
                </>
        )
    }

export default Freelance