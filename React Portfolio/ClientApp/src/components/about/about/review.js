import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Review(props) {

    // entry.416760148

    const { t, i18n } = useTranslation();
    const [iconValue, seticonValue] = useState('')
    const [review, setReview] = useState(true)

        useEffect(() => {
            seticonValue(iconValue)
            console.log(iconValue)
        }, [iconValue]);


    const handleReview = event => {
        setReview(false);
    };



        return (
            <div className="ReviewContainer">
                <div className="reviewResult" style={{ display: review ? 'none' : 'block' }} >

                    <div className="reviewResult">
                        <div className="wrapper"> <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                            <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                            <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                        </svg>
                        </div >
                        <div className="reviewText">
                            <h2>{t("Merci")},</h2>
                            <h3>{t("Votre avis m'a bien été envoyé")} !</h3>
                        </div>
                                        </div>
                </div>

                <div style={{ display: review ? 'block' : 'none' }} >
                <h2>{t('Que pensez-vous de mon Portfolio ?')}</h2>

                <form  name="iform" id="iform" action="https://docs.google.com/forms/d/e/1FAIpQLSdn04LfKch1B6D1u7c04TujIqCBXkiTtnAnFb77HKixelN-Fw/formResponse?" target="hidden_iframe">
                    <input style={{ display: "none" }} type='number' name="entry.416760148" id="entry.416760148" value={ iconValue }></input>


                <div className="ReviewList">
                    <button type="submit" onClick={() => { seticonValue(0); handleReview() } }> <div className="face"><div className="eyes"><span></span><span></span></div ><div className="mouth"></div ></div > </button>
                        <button type="submit" onClick={() => { seticonValue(1); handleReview()}}> <div className="face"><div className="eyes"><span></span><span></span></div ><div className="mouth"></div ></div > </button>
                        <button type="submit" onClick={() => { seticonValue(2); handleReview()}}> <div className="face"><div className="eyes"><span></span><span></span></div ><div className="mouth"></div ></div > </button>
                        <button type="submit" onClick={() => { seticonValue(3); handleReview()}}> <div className="face"><div className="eyes"><span></span><span></span></div ><div className="mouth"></div ></div > </button>
                        <button type="submit" onClick={() => { seticonValue(4); handleReview()}}> <div className="face"><div className="eyes"><span></span><span></span></div ><div className="mouth"></div ></div > </button>
                    </div>

                </form>
                    <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }} ></iframe>
                    </div>
                                                           </div >
        )
    }

export default Review