import React from "react"

class Tourism extends React.Component {
    render() {

        const styles = {
            containerStyle: {
                backgroundImage: 'url("https://via.placeholder.com/500")',
            }
        };

        const { containerStyle } = styles;

        return (
            <div className="container">
                <div className="descriptionLeft" id="disney">
                </div>
                <div className="descriptionRight">
                    <p>Alternance au CRO de Disneyland Paris, l'entité du groupe en charge de la relation client internationale ( 6 langues, 10 marchés segmentés, 5 canaux de communication ).</p>
                    <ul>
                        <li>Développement de spécifications, workflow technique et cas d'utilisation métier</li>
                        <li>Diriger la réunion de stand-up avec un objectif de moins de 5 % de tâches de retard.</li>
                        <li>Planification, suivi des tâches et rapport aux responsables de service.</li><li>Documentation du projet.</li>
                        <li>Gestion budgétaire du projet.</li>
                        <li>Formation de 450 utilisateurs.</li>
                        <li>Gérer la relation entre les services fonctionnels et techniques.</li>
                    </ul>
                    <a href='https://www.disneylandparis.com'> En apprendre plus sur l'entreprise</a>
                </div>
            </div>
        )
    }
}

export default Tourism