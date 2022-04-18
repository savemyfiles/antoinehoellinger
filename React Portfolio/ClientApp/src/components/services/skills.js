import React from "react"
import Salesforce from '../../assets/salesforce.png';
import Excel from '../../assets/excel.png';
import Jira from '../../assets/jira.png';
import PowerBi from '../../assets/powerbi.png';
import Tableau from '../../assets/tableau.png';
import Web from '../../assets/web.png';
import Zendesk from '../../assets/zendesk.png';
import { useTranslation } from "react-i18next";



function Skills(props) {

    const { t, i18n } = useTranslation();

    return (

        <>
           <div className="title">
                <h1>{t("Mes services")}</h1>
                <div className="subline"></div>
            </div>

            <div className="containerSkills">

                <div className="skills">
                    <div className="subskills">
                        <h3>{t('Compétences')}</h3>

                        <div className="details">
                            <span><p>{t('Appétence IT')}</p></span>
                            <span><p>100%</p></span>
                        </div>
                        <div className="bar_skill">
                            <div id="html-bar-100"></div>
                        </div>


                        <div className="details">
                            <span><p>{t('Gestion et Suivi de Portefeuille projets')}</p></span>
                            <span><p>95%</p><p>
                            </p></span></div>
                        <div className="bar_skill">
                            <div id="html-bar-95"></div>
                        </div>

                        <div className="details">
                            <span><p>{t('REPORTING &amp; DOCUMENTATION DES PROJETS')}</p></span>
                            <span><p>95%</p></span>
                        </div>
                        <div className="bar_skill">
                            <div id="html-bar-95"></div>
                        </div>

                        <div className="details">
                            <span><p>{t('Cadrage &gt; Test &gt; Recette &gt; MEP de logiciels')}</p></span>
                            <span><p>90%</p></span>
                        </div>
                        <div className="bar_skill">
                            <div id="html-bar-90"></div>
                        </div>

                        <div className="details">
                            <span><p>{t('Gestion de base de données')}</p></span>
                            <span><p>80%</p></span>
                        </div>
                        <div className="bar_skill">
                            <div id="html-bar-80"></div>
                        </div>

                        <div className="details">
                            <span><p>{t('Appétence marketing')}</p></span>
                            <span><p>70%</p></span>
                        </div>
                        <div className="bar_skill">
                            <div id="html-bar-70"></div>
                        </div>

                    </div>
                </div>


                <div className="tools">

                    <h3>{t('Outils maitrisés')}</h3>

                    <div className="tools_card">
                        <div className="tools_card_img">
                            <a href="https://www.salesforce.com/fr/" target="blank_"><img alt="Logo Salesforce" src={ Salesforce }/></a>
                        </div>
                            <div className="tools_card_text">
                                <p>SALESFORCE</p>
                            </div>
                        </div>

                        <div className="tools_card">
                            <div className="tools_card_img">
                            <a href="https://www.zendesk.fr/" target="blank_"><img alt="Logo Zendesk"  src={ Zendesk }/></a>
            </div>
                                <div className="tools_card_text">
                                    <p>ZENDESK</p>
                                </div>
                            </div>

                            <div className="tools_card">
                                <div className="tools_card_img">
                            <a href="https://support.microsoft.com/fr-fr/office/%C3%A0-propos-de-power-query-dans-excel-7104fbee-9e62-4cb9-a02e-5bfb1a6c536a" target="blank_"><img alt="Logo Excel" src={ Excel }/></a>
            </div>
                                    <div className="tools_card_text">
                                        <p>EXCEL &amp; QUERY</p>
                                    </div>
                                </div>

                                <div className="tools_card">
                                    <div className="tools_card_img">
                            <a href="https://powerbi.microsoft.com/fr-fr/" target="blank_"><img alt="Logo Power BI"  src={ PowerBi }/></a>
            </div>
                                        <div className="tools_card_text">
                                            <p>POWER BI</p>
                                        </div>
                                    </div>

                                    <div className="tools_card">
                                        <div className="tools_card_img">
                            <a href="https://www.tableau.com/fr-fr" target="blank_"><img alt="Logo Tableau"  src={ Tableau }/></a>
           </div>
                                            <div className="tools_card_text">
                                                <p>TABLEAU SOFTWARE</p>
                                            </div>
                                        </div>

                                        <div className="tools_card">
                                            <div className="tools_card_img">
                            <a href="" target="blank_"><img src={ Web }/></a>
            </div>
                                                <div className="tools_card_text">
                                               <p>{t('Développeur web')}</p>
                                                </div>
                                            </div>

                                            <div className="tools_card">
                                                <div className="tools_card_img">
                            <a href="https://www.atlassian.com/fr/software/jira" target="blank_"><img alt="Logo web"  src={ Jira } /></a>
            </div>
                                                    <div className="tools_card_text">
                                                        <p>JIRA</p>
                                                    </div>
                                                </div>
                                            </div>



            </div>
            </>
        )
    }


export default Skills