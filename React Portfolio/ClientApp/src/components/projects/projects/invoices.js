import React from "react"
import Salesforce from '../../../assets/salesforce.png';
import Excel from '../../../assets/excel.png';
import Jira from '../../../assets/jira.png';
import PowerBi from '../../../assets/powerbi.png';
import Tableau from '../../../assets/tableau.png';
import Web from '../../../assets/web.png';
import Zendesk from '../../../assets/zendesk.png';
import { useTranslation } from "react-i18next";



function Invoices(props) {

    const { t, i18n } = useTranslation();

    return (
        <div>
            <div className="title">
                <h1>{t("Mes projets personnels")}</h1>
                <div className="subline"></div>
            </div>


        </div>
     
        )
    }


export default Invoices