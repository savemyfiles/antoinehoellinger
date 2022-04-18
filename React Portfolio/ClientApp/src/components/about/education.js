import React, { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Education(props) {

        const educationIcon = "educationIcon"

        const { t, i18n } = useTranslation();
        const [title, setTitle] = useState(i18n.t('Pour en savoir plus sur mes diplômes..'))
        const [time, setTime] = useState(i18n.t(".. Il suffit de cliquer sur l'un d'entre eux juste à gauche"))
        const [link, setLink] = useState(false)
        const [date, setDate] = useState("")
        const [message, setMessage] = useState(< FaArrowAltCircleLeft className={educationIcon} />)
        const [area, setArea] = useState("")
        const [displayButton, setDisplayButton ] = useState(false)


    const masterTwo = () => {
        setTitle(i18n.t("Master 2 Marketing Digital et E-Commerce"));
        setTime(i18n.t("Durée du programme : 1 an"));
        setArea(i18n.t("Lieu : Université Grenoble Alpes ( UGA )"));
        setDate(i18n.t("Date : 2019 - 2020"));
        setMessage(i18n.t("L'objectif de la formation est ainsi de développer les compétences des étudiants en conception de stratégies de marketing digital et d'e-commerce dans les entreprises. La formation aborde les concepts et les outils pour y parvenir : e-marketing, comportement du e-consommateur, l'environnement légal, ..."));
        setLink("https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-marketing-vente-IDIV7Q1Y/parcours-marketing-digital-et-consommateur-connecte-2e-annee-IYED42OE.html");
        setDisplayButton(true);
    }

    const ceasure = () => {
        setTitle(i18n.t("Année de Césure en Nouvelle Zélande"));
        setTime(i18n.t("Durée du programme : 1 an"));
        setDate(i18n.t("Date : 2018 - 2019"));
        setArea(i18n.t("Lieu : Nouvelle Zélande"));
        setMessage(i18n.t("Année à  l'étranger entre mes deux années de MASTER en Nouvelle-Zélande avec pour objectif un perfectionnement de l'anglais et une découverte de la magnificence des paysages néo-zélandais."));
        setLink("https://www.newzealand.com/");
        setDisplayButton(true);
    }

    const masterOne = () => {
        setTitle(i18n.t("Master Marketing, Ventes"));
        setDate(i18n.t("Date : 2017 - 2018"));
        setArea(i18n.t("Lieu : Université Grenoble Alpes ( UGA )"));
        setTime(i18n.t("Durée du programme : 1 an"));
        setMessage(i18n.t("Le master marketing, vente de Grenoble IAE reste un master généraliste au sens où ses différents parcours ciblent, collectivement, une large palette de métiers du marketing. Chaque parcours de 2e année de master, par contre, est spécialisé sur un type spécifique de débouchés : Le quanti, Ingénerie des marques, Communication et marketing digitale, Marketing digital et consommateur connecté et Customer relationships marketing"));
        setLink("https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-marketing-vente-IDIV7Q1Y.html");
        setDisplayButton(true);
}

    const bachelor = () => {
        setTitle(i18n.t("Bachelor of Business"));
        setDate(i18n.t("Date : 2016 - 2017"));
        setTime(i18n.t("Durée du programme : 1 an"));
        setArea(i18n.t("Lieu : G.M.I.T ( Irlande )"));
        setMessage(i18n.t("Ce programme offre une formation commerciale générale pour permettre de travailler avec succès dans les affaires avec une variété de sujets commerciaux pour développer une compréhension générale de l'environnement administratif, économique, juridique et social dans lequel les entreprises opèrent."));
        setLink("https://www.gmit.ie/bachelor-of-business");
        setDisplayButton(true);
}

    const dut = () => {
        setTitle(i18n.t("D.U.T Technique de comercialisation"));
        setArea(i18n.t("Lieu : I.U.T de Valence"));
        setDate(i18n.t("Date : 2014 - 2016"));
        setTime(i18n.t("Durée du programme : 2 ans"));
        setMessage(i18n.t("L'objectif de ce diplome est de former les étudiants pour qu’ils puissent rapidement occuper des fonctions prioritairement commerciales."));
        setLink("https://www.orientation.com/diplomes/dut-techniques-de-commercialisation");
        setDisplayButton(true);
 }

    const bac = () => {
        setTime(i18n.t("Durée du programme : 1 an"));
        setTitle(i18n.t("BAC Economique et Social"));
        setDate(i18n.t("Date : 2014"));
        setArea(i18n.t("Lieu : Lycée de l'Edit"));
        setMessage(false);
        setLink(false);
        setDisplayButton(true);
}

        return (
            <><h2>{t("Mes diplômes")} </h2>

            <div className="education_main">

                <div className="education_container">

                    <div id="mastertwo" className="education_card" onClick={masterTwo} >
                            <h3>{t("Master 2 Marketing Digital et E-Commerce")}</h3>
                            <h4>{t("Université Grenoble Alpes( UGA )")}</h4>
                            <a className="responsive" target="_blank" rel="noopener noreferrer" href="https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-marketing-vente-IDIV7Q1Y/parcours-marketing-digital-et-consommateur-connecte-2e-annee-IYED42OE.html">[ En savoir Plus ]</a>

                    </div>

                    <div id="ceasure" className="education_card" onClick={ceasure}>
                            <h3>{t("Année de césure")}</h3>
                            <h4>{t("Nouvelle Zélande")}</h4>
                            <a className="responsive" target="_blank" rel="noopener noreferrer" href="https://www.newzealand.com/">[ En savoir Plus ]</a>

                    </div>

                    <div id="masterone" className="education_card" onClick={masterOne}>
                            <h3>{t("Master Marketing, Ventes")}</h3>
                            <h4>{t("Université Grenoble Alpes ( UGA )")}</h4>
                            <a className="responsive" target="_blank" rel="noopener noreferrer" href="https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-marketing-vente-IDIV7Q1Y.html">[ En savoir Plus ]</a>

                    </div>

                    <div id="bachelor" className="education_card" onClick={bachelor}>
                            <h3>{t("Bachelor of Business")}</h3>
                            <h4>{t("Galway-Mayo Institute of Technology ( GMIT )")}</h4>
                            <a className="responsive" target="_blank" rel="noopener noreferrer" href="https://www.gmit.ie/bachelor-of-business">[ En savoir Plus ]</a>
                    </div>

                    <div id="dut" className="education_card" onClick={dut}>
                            <h3>{t("D.U.T Techniques de commercialisation")}</h3>
                            <h4>{t("I.U.T de Valence")}</h4>
                            <a className="responsive" target="_blank" rel="noopener noreferrer" href="https://www.orientation.com/diplomes/dut-techniques-de-commercialisatio">[ En savoir Plus ]</a>
                    </div>

                    <div id="bac" className="education_card" onClick={bac}>
                            <h3>{t("BAC Economique et Social")}</h3>
                            <h4>{t("Péage de Rousillon")}</h4>
                    </div>

                </div>

                <div className="educationAside">
                    <h3>{ title }</h3>
                    <h4>{ time }</h4>
                    <h5>{area}</h5>
                    <h5>{date}</h5>
                    <p>{message}</p>
                     <a style={{ display: displayButton ? 'block' : 'none' }} className="button" href={link}>{t('En savoir plus')}</a>
                </div>

                </div>
            </>
        )
    }

export default Education
