import React from "react"
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa';


class MySelf extends React.Component {
    render() {
        return (
            <div className="aboutContainer">

                <div className="aboutImg">
                </div>

                <div className="aboutText">


                    <div className="aboutDescription">

                        <h2> Antoine HOELLINGER </h2>
                        <h4> Jeune PMO spécialisé dans les projets digitaux et data. </h4>
                        <p className="underligned"> Passionné par le Big data, la sécurité informatique, le data management et l’univers du digital en général, je suis convaincu qu’une bonne gestion des données est devenue essentielle pour la croissance des entreprises.
                         Familier avec la gestion et l'implémentation des CRM, SAP/ERP, ...                 
                         Partenaire dans le réseau d'indépendants <a href="https://www.pragmantic.biz/" target="blank_" >PRAGMANTIC</a> en tant que spécialiste digital.</p>
                                                  
                                                                                                                                                              </div >

                                       <div className="aboutContainerText">
                                                    <div className="aboutContainerDescription">
                                                        <p> <span className="color"><strong>Nom</strong></span> : Antoine HOELLINGER</p>
                                                           <p> <span className="color"><strong>Diplôme</strong></span> : Master 2</p>
                                                         </div>
                                           <div className="aboutContainerDescription">
                                                        <p> <span className="color"><strong>Age</strong></span> : 21</p>
                                                           <p> <span className="color"><strong>Localisation</strong></span> : Paris (FR) | Remote </p>
                                                         </div>
                                                         
                                                         </div>

                                            <div >
                                                                   <ul className="aboutButton"> 
                                                                     <li><button className="aboutBtn">Télécharger mon CV</button></li>
                                                                      <div className="aboutSocial">
                                                                          <li><a href="https://www.linkedin.com/in/antoine-hoellinger/"><FaLinkedin className="SocialIcon"/></a></li>
                                                                          <li><a href="https://www.facebook.com/profile.php?id=100000294139004"><FaFacebook className="SocialIcon" /></a></li>
                                                                          <li><a href="https://github.com/savemyfiles"><FaGithub className="SocialIcon" /></a></li>
                                                                                 </div>      
                                                                                 </ul>
                                                                                     </div>
                                                     </div >                    
                                                           </div >
        )
    }
}

export default MySelf