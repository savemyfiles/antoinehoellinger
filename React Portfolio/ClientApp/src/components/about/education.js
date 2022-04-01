import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";

class Education extends React.Component {

    constructor(props) {
        const educationIcon = "educationIcon"
        super(props);
        this.state = {
            title:"Pour en savoir plus sur mes diplômes..",
            time:".. Il suffit de cliquer sur l'un d'entre eux juste à gauche ",
            link:"",
            message: < FaArrowAltCircleLeft className={educationIcon} />
        }
    }

    masterTwo = () => {
        this.setState({
            title: "Master 2 Digital Marketing and E-Commerce",
            linkTitle: "En savoir plus",
            time: "Durée du programme: 1 an",
            message: "The objective of the training is thus to develop students' skills in designing digital marketing and e-commerce strategies in companies. The training addresses the concepts and tools to achieve this: m-marketing, e-consumer behavior, the legal environment, ...",  
            link: "https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-marketing-vente-IDIV7Q1Y/parcours-marketing-digital-et-consommateur-connecte-2e-annee-IYED42OE.html"
        });
    }

    ceasure = () => {
        this.setState({
            title: "Année de Césure en Nouvelle Zélande",
            linkTitle: "En savoir plus",
            time: "Durée du programme: 1 an",
        message: "Year abroad between my two years of MASTER in New Zealand with the aim of perfecting English and discovering the magnificence of New Zealand landscapes.",
            link: "https://www.newzealand.com/"
    });
    }

    masterOne = () => {
        this.setState({
            title: "Master Marketing, Ventes",
            linkTitle: "En savoir plus",
            time: "Durée du programme: 1 an",
        message: "The marketing and sales master's degree from Grenoble IAE remains a generalist master's degree in the sense that its different courses collectively target a wide range of marketing professions. Each course of the 2nd year of the master, on the other hand, is specialized in a specific type of outlet: Quanti, Brand engineering, Communication and digital marketing, Digital marketing and connected consumer and Customer relationships marketing.",
            link: "https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-marketing-vente-IDIV7Q1Y.html"
});
}

    bachelor = () => {
        this.setState({
            title: "Bachelor of Business",
            linkTitle: "En savoir plus",
            time: "Durée du programme: 1 an",
        message: "This program provides general business education to enable successful work in business with a variety of business subjects to develop a general understanding of the administrative, economic, legal and social environment in which businesses operate.",
            link: "https://www.gmit.ie/bachelor-of-business"
});
    }

    dut = () => {
        this.setState({
            title: "D.U.T Technique de comercialisation",
            linkTitle: "En savoir plus",
            time: "Durée du programme: 2 ans",
        message: "The objective of this diploma is to train students so that they can quickly occupy primarily commercial functions. ",
            link: "https://www.orientation.com/diplomes/dut-techniques-de-commercialisation"
});
    }

    bac = () => {
        this.setState({
            time: "Durée du programme: 1 an",
            title: "BAC Economique et Social",
            linkTitle: "En savoir plus",
            message: false,
            link: false
});
    }


    render() {

        return (
            <><h2> Mes diplômes </h2>

            <div className="education_main">

                <div className="education_container">

                    <div id="mastertwo" className="education_card" onClick={this.masterTwo} >
                        <h3>Master 2 Digital Marketing and E-Commerce </h3>
                            <h4>Grenoble Alpes University ( UGA )</h4>
                            <a className="responsive" target="_blank" rel="noopener noreferrer" href="https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-marketing-vente-IDIV7Q1Y/parcours-marketing-digital-et-consommateur-connecte-2e-annee-IYED42OE.html">[ En savoir Plus ]</a>

                    </div>

                    <div id="ceasure" className="education_card" onClick={this.ceasure}>
                        <h3>Gap Year</h3>
                            <h4>New Zealand</h4>
                            <a className="responsive" target="_blank" rel="noopener noreferrer" href="https://www.newzealand.com/">[ En savoir Plus ]</a>

                    </div>

                    <div id="masterone" className="education_card" onClick={this.masterOne}>
                        <h3>Masters in Marketing, Sales </h3>
                            <h4>Grenoble Alpes University (GAU)</h4>
                            <a className="responsive" target="_blank" rel="noopener noreferrer" href="https://formations.univ-grenoble-alpes.fr/fr/catalogue-2021/master-XB/master-marketing-vente-IDIV7Q1Y.html">[ En savoir Plus ]</a>

                    </div>

                    <div id="bachelor" className="education_card" onClick={this.bachelor}>
                        <h3>Bachelor of Business </h3>
                            <h4>Galway-Mayo Institute of Technology</h4>
                            <a className="responsive" target="_blank" rel="noopener noreferrer" href="https://www.gmit.ie/bachelor-of-business">[ En savoir Plus ]</a>
                    </div>

                    <div id="dut" className="education_card" onClick={this.dut}>
                        <h3>D.U.T Marketing</h3>
                            <h4>I.U.T of Valence</h4>
                            <a className="responsive" target="_blank" rel="noopener noreferrer" href="https://www.orientation.com/diplomes/dut-techniques-de-commercialisatio">[ En savoir Plus ]</a>
                    </div>

                    <div id="bac" className="education_card" onClick={this.bac}>
                        <h3>BAC Economic and Social</h3>
                            <h4>Péage de Rousillon</h4>
                    </div>

                </div>

                <div className="educationAside">
                    <h3>{this.state.title}</h3>
                    <h4>{this.state.time}</h4>
                    <p>{this.state.message}</p>
                     <a href={this.state.link}>{this.state.linkTitle}</a>
                </div>

                </div>
            </>
        )
    }
}

export default Education
