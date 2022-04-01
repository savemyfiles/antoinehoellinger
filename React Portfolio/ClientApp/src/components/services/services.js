import React from "react"
import { FaCalendarDay, FaFileSignature, FaClipboardList, FaReact, FaChartBar, FaSalesforce } from 'react-icons/fa';



class Services extends React.Component {
    render() {
        return (
            <div className="services">

                    <h2> Mes services </h2>

                <div className="ServicesContainer">
                    <div className="sub_ServicesContainer">

                        <div className="ServiceItems">
                            < FaCalendarDay className="servicesIcons" />
                            <h3>PMO</h3>
                            <ul>
                                <li>Suivre et communiquer sur les avancements des projets</li>
                                <li>Prioriser les tâches</li>
                                <li>Plannifier les ressources</li>
                            </ul>
                        </div>

                        <div className="ServiceItems">
                            < FaFileSignature className="servicesIcons" />
                            <h3>MOA</h3>
                            <ul>
                                <li>Cadrage des expressions de besoin</li>
                                <li>Réalisation de specs métier</li>
                                <li>Reporting régulier sous différents formats</li>
                            </ul>
                        </div>

                        <div className="ServiceItems">
                            < FaClipboardList className="servicesIcons" />
                            <h3>Chef de Projet | Product Owner</h3>
                            <ul>
                                <li>Gestion des ressources projet (financières, humains, temps)</li>
                                <li>Mise en place et suivi d'objectifs</li>
                                <li>Coordinationn et orchestration des équipes</li>
                            </ul>
                        </div>


                        <div className="ServiceItems">
                            < FaReact className="servicesIcons" />
                            <h3>WEB DEVELOPPEUR</h3>
                            <ul>
                                <li>Intégration web : HTML/CSS, PHP, Javascript</li>
                                <li>Utilisation de base de données : SQL </li>
                            </ul>
                        </div>


                        <div className="ServiceItems">
                            < FaChartBar className="servicesIcons" />
                            <h3>WEB MASTER</h3>
                            <ul>
                                <li>Pilotage et Gestion d'un site web</li>
                                <li>Tracking et Reporting de données</li>
                            </ul>
                        </div>

                        <div className="ServiceItems">
                            < FaSalesforce className="servicesIcons" />
                            <h3>Administrateur Salesforce</h3>
                            <ul>
                                <li>Gestion du support technique et fonctionnel</li>
                                <li>Orchestration des montées de version</li>
                                <li>Conduite du changement</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Services