import React from "react"
import { useTranslation } from "react-i18next";

function Tourism(props) {

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
                <div className="descriptionLeft imageExp" id="disney">
                </div>
                <div className="descriptionRight">
                        <p>{t("Alternance au CRO de Disneyland Paris, l'entité du groupe en charge de la relation client internationale ( 6 langues, 10 marchés segmentés, 5 canaux de communication ).")}</p>
                    <ul>
                        <li>{t("Développement de spécifications, workflow technique et cas d'utilisation métier")}</li>
                        <li>{t("Diriger la réunion de stand-up avec un objectif de moins de 5 % de tâches de retard.")}</li>
                        <li>{t("Planification, suivi des tâches et rapport aux responsables de service.")}</li>
                        <li>{t("Documentation du projet.")}</li>
                        <li>{t("Gestion budgétaire du projet.")}</li>
                        <li>{t("Formation de 450 utilisateurs.")}</li>
                        <li>{t("Gérer la relation entre les services fonctionnels et techniques.")}</li>
                    </ul>
                        <a className="button" href='https://www.disneylandparis.com'>{t("En apprendre plus sur l'entreprise")}</a>
                </div>
                </div>
                </>
        )
    }

export default Tourism