import React from "react"
import { FaBuilding, FaLuggageCart, FaLandmark } from 'react-icons/fa';
import Freelance from './experience/freelance'
import Startup from "./experience/startup";
import Tourism from "./experience/tourism";


class Experience extends React.Component {


    state = { isActive: false };

    constructor(props) {

        super(props);
        this.state = {
            title: "",
            subtitle: "",
            display: 'none',
            displaytwo: 'none',
            displaythree: 'none',
        }
    }

    handleStartUp = () => {
        this.setState({ isActive: !this.state.isActive });
        this.setState({
            title: <> Mes Experiences <br /> en Start-up </>,
            subtitle: "Stage dans un réseau de franchises national pour améliorer la visibiltié digitale.",
            display: 'block',
            displaytwo: 'none',
            displaythree: 'none',
        });
    };

    handleTourism = () => {
        this.setState({ isActive: !this.state.isActive });
        this.setState({
            title: <> Mon Experience <br /> dans le tourisme </> ,
            subtitle: "Lors de mon passage à Disneyland j'ai été en charge de la gestion de projets de transformation CRM omnicanal (définition et mise en place de solutions & logiciels)",
            display: 'none',
            displaytwo: 'block',
            displaythree: 'none',
        });
    };

    handleBank = () => {
        this.setState({ isActive: !this.state.isActive });
        this.setState({
            title: <> Mon Experience <br /> de Freelance </>,
            subtitle: "PragmaNTIC apporte son expertise et ses services aux PME afin d'aligner leur DSI avec leur stratégie et leurs besoins métiers via une approche agile, pragmatique et innovante.",
            display: 'none',
            displaytwo: 'none',
            displaythree: 'block',
        });
    };

 
    exit = () => {
        this.setState({ isActive: false });
    };

    render() {
        const isActive = this.state.isActive;

        const styles = {
            containerStyle: {
                backgroundImage: this.state.backgroundImage,
            }
        };

        const displayOn = {
            A: {
                display: this.state.display,
            }
        };

        const displayOnTwo = {
            B: {
                display: this.state.displaytwo,
            }
        };

        const displayOnThree = {
            C: {
                display: this.state.displaythree,
            }
        };



        const { containerStyle } = styles;

        const { A } = displayOn;
        const { B } = displayOnTwo;
        const { C } = displayOnThree;


        return (

            <div>
                <div className={isActive ? "detailsOn" : "detailsOff"}>
                    <div className="Exit" onClick={this.exit}>X</div>
                    <h1>{this.state.title}</h1>
                    <h2>{this.state.subtitle}</h2>

                    <div style={A}>
                        <Startup />
                    </div>
                    <div style={B}>
                        <Tourism />
                    </div>
                    <div style={C}>
                        <Freelance />
                    </div>
                                    </div>
    <h2> Mes précendents domaines </h2>

                <div className="experience">

                    <div className="card" onClick={this.handleStartUp}>
    < FaBuilding className="servicesIcons"/>
    <h3>Start-up</h3>
    <h4>2018 - 2019</h4>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
    </div>
                    <div className="circle">
     <p>Differentes experiences pour des entreprises naissantes :</p>  <ul><li>Webmaster,</li><li>Réalisation de supports digitaux et print.</li></ul>
    </div>
  </div>

                    <div className="card" onClick={this.handleTourism}>
                    < FaLuggageCart className="servicesIcons" />
    <h3>Tourisme</h3>
    <h4>2020 - 2021</h4>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar"></div>
    </div>
                    <div className="circle">
                            <p>Assistant PMO dans un projet de déploiement d'un CRM dans le centre d'appels international d'une franchise majeure du secteur des parcs d'attraction </p> <ul><li>Suivi et plannification des actions projet,</li><li>Gestion des ressources,</li><li>Réalisation des specs.</li></ul>
    </div>
  </div>



                    <div className="card" onClick={this.handleBank}>
< FaLandmark className="servicesIcons" />
     <h3>Banque</h3>
        <h4>2021 - Aujourd'hui</h4>
                    <div className="bar">
                        <div className="emptybar"></div>
                        <div className="filledbar_half"></div>
    </div>
                    <div className="circle">
     <p>PMO d'un portefeuille projet IT pour une filliale d'un grand groupe bancaire pendant 4 mois avant de devenir chargé de projets digitaux : </p><ul><li>Administrateur Salesforce,</li> <li>Webmaster,</li><li>Acteur dans la transformation du SI.</li></ul> 
    </div>
     </div>

                </div>



            </div>
        )
    }

}

export default Experience