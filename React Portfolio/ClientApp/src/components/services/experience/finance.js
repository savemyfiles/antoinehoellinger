    import React from "react"
import { useTranslation } from "react-i18next";


function Finance(props) {

    const { t, i18n } = useTranslation();


        return (
            <>
                <h1>{t("Mon Experience en Micro-finance")}</h1>
            <div className="container">
                    <div className="imageExp" id="pmoint" >
                    </div>
                    <div className="descriptionRight">
                        <h2>{t("PMO International")}</h2>

                        <p>{t("Préstation dans le cadre d’un déploiement Core Model ( comprenant 1 CBS, une 10ène d'applications connexes, 1 middleware, ... ) à l’international ( 9 pays ), en tant que PMO Central pour")} :</p>
                         < ul >
                            <li>{t("Superviser et suivre les tâches centrales visant la livraison et l'alignement avec le déploiement du Core Model dans les filiales concernées. Recueillir des données sur l'exécution des Projets.")}</li>
                            <li>{t("Maitriser le planning du programme au niveau central et faire les actualisations nécessaires pour le suivi selon les directrices de la direction.")}</li>
                            <li>{t("Dans les instances de suivi des projets, identifier les risques, suivre les actions et les escalades et faire le lien entre les pays en processus de déploiement.")}</li>
                        </ul >

                        <a className="button" href="https://www.pragmantic.biz/">{t("En savoir plus")}</a>

                </div>
                </div>

                <div className="container container-reverse">


                        <div className="descriptionRight">
                            <h2>{t("PMO Technique")}</h2>
                        <p>{t("Suite à des expériences peu satisfaisantes avec des solutions managées par des prestataires externes, l'entreprise m'a confié la mission de suivre et coordonner un projet de migration de toute son infrastructure d'hébergement vers une plateforme IaaS internalisée.")} :</p>

                            <ul>
                            <li>{t("En charge de la gestion et du suivi d'un projet de migration majeur de Paas à IaaS, couvrant neuf pays et englobant plus de dix applications, un middleware, et un CBS (Core Model). De la phase de benchmark de partenaire au déploiement BUILD.")}</li>
                            <li>{t("Cadrage et suivi des chantiers Infra et solutions digitales.")}</li>
                                <li>{t("Cadrage et suivi des chantiers d'intégration pour la mise en place d'API.")}</li>
                                </ul>
                        <a style={{ justifySelf: 'flex-end' }} className="button" href="https://www.pragmantic.biz/">{t("En savoir plus")}</a>
                    </div>

                    <div className="imageExp" id="pmoit" >
                    </div>
                </div>
           
                </>
        )
    }

export default Finance