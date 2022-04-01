import React from "react"

class Startup extends React.Component {
    render() {

        const styles = {
            containerStyle: {
                backgroundImage: 'url("https://via.placeholder.com/500")',
            }
        };

        const { containerStyle } = styles;

           return (
            <div className="container">
                <div className="descriptionLeft" id="homepartner">
                </div>
                <div className="descriptionRight">
                    <p>Mes missions étaient :</p>
                    <ul>
                        <li>Concevoir et gérer un réseau de sites web avec mise en place de stratégies e-marketing (SEO & SEA).</li>
                        <li>Créer une stratégie de contenu pour les réseaux sociaux. </li><li>Réaliser des supports de communication (print et numériques).</li>
                    </ul>
                    Mes aussi quelques missions en Freelance comme :
                    <ul>
                        <li>Réalisation et impression de supports visuels & print</li>
                        <li>Refonte de la charte graphique</li>
                        <li>Services de webmastering</li>
                    </ul>
                       <a href="https://www.homepart.net/">En apprendre plus sur l'entreprise</a>
                </div>
            </div>
        )
    }
}

export default Startup