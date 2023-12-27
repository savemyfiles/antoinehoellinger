import React from "react"
import { useTranslation } from "react-i18next";


function Interview(props) {

    const { t, i18n } = useTranslation();


        return (
            <div className="aboutContainer" style={{ flexDirection: 'column' }}>


                <div className="aboutText" style={{ textAlign:'center' }}>
                    <h2> {t("Mon interview")} <span style={{ color:'#14f3db'} }> Learn IT by Open CAMPUS</span></h2>
                    <p> {t("Dans le cadre de mes fonctions en tant qu'expert informatique et digital au sein du réseau")}
                        <a className="pragLink" href="https://www.pragmantic.biz/" target="blank_" > PRAGMANTIC</a>
                       {t(", j'ai eu le plaisir d'être interviewé par l'équipe")}
                            <a className="pragLink" href="https://reseau-opencampus.com//learn-it-open-campus-brest/" target="blank_" > Learn IT by Open CAMPUS</a>
                        {t(". L'objectif de cette interview était de comprendre le périmètre de mon activité et de partager quelques moments privilégiés. Je vous invite à découvrir la vidéo pour en savoir plus !")}

                    </p>
                    <a className="button" style={{ margin: '50px auto 0px auto' }} href="https://www.linkedin.com/feed/update/urn:li:activity:7052581704510664704/">{t("En savoir plus")}</a>

                </div >

                <div className="videoContainer underligned"  >
                    <video width="100%" height="auto" controls>
                        <source src="./videos/interview-antoine.mp4" type="video/mp4" />
                        {t("Votre navigateur ne prend pas en charge la lecture de vidéos.")}
                    </video>
                </div>

                </div >
        )
    }

export default Interview