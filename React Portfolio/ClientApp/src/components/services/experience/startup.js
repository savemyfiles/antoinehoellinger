import React from "react"
import { useTranslation } from "react-i18next";

function Startup() {

    const { t, i18n } = useTranslation();


        const styles = {
            containerStyle: {
                backgroundImage: 'url("https://via.placeholder.com/500")',
            }
        };

        const { containerStyle } = styles;

        return (
            <>
                <h1>{t("Mon Experience en Start-up")}</h1>
                <h2>{t("Stage dans un réseau de franchises national pour améliorer la visibiltié digitale")}</h2>
               <div className="container">
                    <div className="imageExp" id="homepartner">
                </div>
                <div className="descriptionRight">
                        <p>{t("Mes missions étaient")} :</p>
                    <ul>
                            <li>{t("Concevoir et gérer un réseau de sites web avec mise en place de stratégies e-marketing (SEO & SEA).")}</li>
                            <li>{t("Créer une stratégie de contenu pour les réseaux sociaux.")} </li>
                            <li>{t("Réaliser des supports de communication (print et numériques).")}</li>
                    </ul>
                        <p>{t("Mais aussi quelques missions en Freelance comme")} :</p>
                    <ul>
                            <li>{t("Réalisation et impression de supports visuels & print")}</li>
                            <li>{t("Refonte de la charte graphique")}</li>
                            <li>{t("Services de webmastering")}</li>
                    </ul>
                        <a className="button" href="https://www.homepart.net/">{t("En apprendre plus sur l'entreprise")}</a>
                </div>
                </div>
                </>
        )
    }

export default Startup