import React from "react"
import { useTranslation } from "react-i18next";


function Finance(props) {

    const { t, i18n } = useTranslation();


        return (
            <>
                <h1>{t("Mon Experience en Micro-finance")}</h1>
                <h2>{t("Stage dans un réseau de franchises national pour améliorer la visibiltié digitale")}</h2>
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

           
                </>
        )
    }

export default Finance