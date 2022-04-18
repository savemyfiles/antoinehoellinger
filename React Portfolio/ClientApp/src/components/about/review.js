import React from "react";
import { useTranslation } from "react-i18next";

function Review(props) {

    const { t, i18n } = useTranslation();

        return (
            <div className="ReviewContainer">
                <h2>{t('Que pensez-vous de mon Portfolio ?')}</h2>
                <ul>
                    <li> <div className="face"><div className="eyes"><span></span><span></span></div ><div className="mouth"></div ></div > </li>
                    <li> <div className="face"><div className="eyes"><span></span><span></span></div ><div className="mouth"></div ></div > </li>
                    <li> <div className="face"><div className="eyes"><span></span><span></span></div ><div className="mouth"></div ></div > </li>
                    <li> <div className="face"><div className="eyes"><span></span><span></span></div ><div className="mouth"></div ></div > </li>
                    <li> <div className="face"><div className="eyes"><span></span><span></span></div ><div className="mouth"></div ></div > </li>
                    </ul>
                                                           </div >
        )
    }

export default Review