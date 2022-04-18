import React from "react"
import { FaCalendarDay, FaFileSignature, FaClipboardList, FaReact, FaChartBar, FaSalesforce } from 'react-icons/fa';
import { useTranslation } from "react-i18next";



function Services(props) {

    const { t, i18n } = useTranslation();

        return (
            <div className="services">

                <h2>{t('Mes Services')}</h2>

                <div>
                    <div className="sub_ServicesContainer">

                        <div className="ServiceItems">
                            < FaCalendarDay className="servicesIcons" />
                            <h3>{t('PMO')}</h3>
                            <ul>
                                <li>{t('Suivre et communiquer sur les avancements des projets')}</li>
                                <li>{ t('Prioriser les tâches')}</li>
                                <li>{ t('Plannifier les ressources')}</li>
                            </ul>
                        </div>

                        <div className="ServiceItems">
                            < FaFileSignature className="servicesIcons" />
                            <h3>{t('MOA')}</h3>
                            <ul>
                                <li>{t('Cadrage des expressions de besoin')}</li>
                                <li>{t('Réalisation de specs métier')}</li>
                                <li> {t('Reporting régulier sous différents formats')}</li>
                            </ul>
                        </div>

                        <div className="ServiceItems">
                            < FaClipboardList className="servicesIcons" />
                            <h3>{t('Chef de Projet | Product Owner')}</h3>
                            <ul>
                                <li>{t('Gestion des ressources projet (financières, humains, temps)')}</li>
                                <li>{t("Mise en place et suivi d'objectifs")}</li>
                                <li> { t('Coordinationn et orchestration des équipes') }</li>
                            </ul>
                        </div>


                        <div className="ServiceItems">
                            < FaReact className="servicesIcons" />
                            <h3>{t('WEB DEVELOPPEUR')}</h3>
                            <ul>
                                <li>{t('Intégration web : HTML/CSS, PHP, Javascript') }</li>
                                <li>{t('Uitilisation de Frameworks : React, Bootstrap') }</li>
                                <li>{ t('Utilisation de base de données') }</li>
                            </ul>
                        </div>


                        <div className="ServiceItems">
                            < FaChartBar className="servicesIcons" />
                            <h3>{t('WEB MASTER')}</h3>
                            <ul>
                                <li>{t("Pilotage et Gestion d'un site web")}</li>
                                <li>{t('Tracking et Reporting de données')}</li>
                            </ul>
                        </div>

                        <div className="ServiceItems">
                            < FaSalesforce className="servicesIcons" />
                            <h3>{t("Administrateur Salesforce")}</h3>
                            <ul>
                                <li>{t("Gestion du support technique et fonctionnel")}</li>
                                <li>{t("Orchestration des montées de version")}</li>
                                <li>{ t("Conduite du changement")}</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }


export default Services