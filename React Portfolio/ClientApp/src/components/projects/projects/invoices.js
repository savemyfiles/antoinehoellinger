import React, { useEffect, useState } from "react"
import Image from '../../../assets/images/logowhite.png';
import { useTranslation } from "react-i18next";
import moment from "moment";


function Invoices(props) {

    const { t, i18n } = useTranslation();
    const [invoices, setInvoices] = useState({})

    useEffect(() => {
        const fetchReleaseData = async () => {
            try {
                const response = await fetch('https://api.github.com/repos/savemyfiles/antoine-hoellinger.cloud', {
                    headers: {
                        Authorization: 'token  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',
                    },
                });
                const data = await response.json();
                setInvoices(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de release :', error);
            }
        };

        fetchReleaseData();
    }, []);

    const backgroundImageStyle = {
        height: '500px',
        backgroundImage: `url(${Image})`,
        backgroundSize: 'cover',
        backgroundRepeat: ' no-repeat',
        backgroundPosition: 'center',
    };

    return (
        <section>
            <div className="title">
                <h1>{t("Mes projets personnels")}</h1>
                <div className="subline"></div>
            </div>
            <h2>EasyInvoice</h2>

            <div className='project-container'>

                <div className='image-container'>
                        <div style={backgroundImageStyle}></div>
                    </div>


                    <div className='project-side-description'>
                        <h3>{t("Information sur le projet")}</h3>

                         <p>{t("Ma passion pour l'entrepreneuriat m'a conduit à créer une solution innovante pour répondre à un besoin concret : la gestion efficace des factures pour les auto-entrepreneurs en France. En tant qu'indépendant, j'ai rencontré des difficultés à trouver une plateforme répondant pleinement à mes besoins, alors j'ai décidé de concevoir ma propre application.")} </p>

                        <div>
                                <h3>{t("Origine et Decription du Projet")} </h3>
                                <p>{t("Partant de mon propre besoin de créer, gérer et stocker des factures, j'ai développé une application qui simplifie cette tâche cruciale pour tout entrepreneur. Cette initiative découle d'une lacune sur le marché : l'absence d'une solution intuitive et complète pour les auto-entrepreneurs français.")} </p>
                        </div>

                        <div>
                            <p>{t("Mon application offre une interface intuitive pour créer des factures professionnelles en quelques étapes simples. Elle permet également de gérer plusieurs entreprises depuis une même plateforme, garantissant un suivi précis des paiements et une organisation optimale. Le stockage sécurisé des factures offre un accès immédiat à toute donnée importante, à tout moment.Connectivité ClientUn aspect essentiel de cette application est sa capacité à établir des liens directs avec les clients. Elle facilite un suivi transparent des factures, favorisant ainsi des échanges fluides et une meilleure communication pour un service client de qualité.L'Engagement envers la SimplicitéMon objectif principal était de créer une solution facile à utiliser et personnalisable selon les besoins spécifiques de chaque utilisateur. L'application s'adapte à l'identité de l'entreprise, offrant ainsi une expérience fluide et intuitive.")} </p>
                            </div>

                    {invoices && <div>
                        <h3>{t("Information Github")}</h3>
                        <ul style={{ color: 'white' }}>
                            <li>{t("Nom du projet")} : {invoices.name}</li>
                            <li>{t("Principal language utilisé")} : {invoices.language}</li>
                            <li>{t("Date de création")} : {moment(invoices.pushed_at).format('DD MMMM YYYY')}</li>
                            <li>{t("Dernière mise à jour")} : {moment(invoices.updated_at).format('DD MMMM YYYY')}</li>
                        </ul>

                        <div className="button-container">
                            {invoices.private ? "" :  <a className="button" href={invoices.html_url}>{t("Voir sur")} GitHub</a>}
                            <a className="button" href='https://antoine-hoellinger.cloud/'>{t("Voir")} Online</a>
                        </div>
                    </div>}

                    </div>

                

               </div>




        </section>
     
        )
    }


export default Invoices