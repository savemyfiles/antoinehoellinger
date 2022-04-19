import React, { useState } from "react";
import { FaUserTie, FaCity, FaPhoneAlt, FaEnvelopeOpenText } from 'react-icons/fa';
import axios from 'axios';
import { useTranslation } from "react-i18next";


function Form(props) {

    const { t, i18n } = useTranslation();

    const [fname, setFname] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [mailSent, setMailSent] = useState('')
    const [error, setError] = useState('')
    const [form, setForm] = useState(true)

    const handleSubmit = event => {
        setForm(false);
    };



        return (
            <>
                <div className="title">
                    <h1>{t("Me Contacter")}</h1>
                    <div className="subline"></div>
                </div>

            <div className="main_contact_container">

            <div className='contact_items'>

                        <div className="formResult" style={{ display: form ? 'none' : 'flex' }}>
                            <div className="wrapper"> <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                            </svg>
                            </div>
                            <h2>{t("Merci")},</h2>
                            <h3>{t("Votre message a bien été envoyé !")}</h3>
                            <p>{t("Je reviendrai vers vous dès que possible.")}</p>
                            </div>

                        <div className="form" style={{ display: form ? 'flex' : 'none' }}>

                            <h2>{t("Formulaire")}</h2>

                            <form name="gform" id="gform" action="https://docs.google.com/forms/d/e/1FAIpQLScjqE_-I63WK4IX1k7r9zpUtXDUIkq7rmT2R_oUi4T3kPHqPg/formResponse?" target="hidden_iframe" onSubmit={ handleSubmit } >

                                <div className="form_content">
                                    <input type="text" id="entry.778096704" name="entry.778096704" value={fname} placeholder={t("Prénom")} required onInvalid={e => e.target.setCustomValidity(i18n.t("Please, enter your First Name"))}
                                        onInput={e => e.target.setCustomValidity('')} onChange={(e) => setFname(e.target.value)} />
                                </div>


                                <div className="form_content">
                                    <input type="text" id="entry.2124326682" name="entry.2124326682" value={name} placeholder={t("Nom")} required onInvalid={e => e.target.setCustomValidity(i18n.t("Please, type your Last Name"))}
                                        onInput={e => e.target.setCustomValidity('')} onChange={(e) => setName(e.target.value)} />
                                </div>

                                <div className="form_content">
                                    <input type="email" id="entry.1573004661" name="entry.1573004661" value={email} placeholder="E-mail" required onInvalid={e => e.target.setCustomValidity(i18n.t("Please, type your e-mail adresse"))}
                                        onInput={e => e.target.setCustomValidity('')} onChange={(e) => setEmail(e.target.value)} />
                                </div>


                                <div className="form_content">
                                    <input type="text" id="entry.493812128" name="entry.493812128" value={subject} placeholder={t("Sujet")} required onInvalid={e => e.target.setCustomValidity(i18n.t("Please, type your message title"))}
                                        onInput={e => e.target.setCustomValidity('')} onChange={(e) => setSubject(e.target.value)} />
                                </div>


                                <div className="form_content">
                                    <input type="text" id="entry.1101036090" name="entry.1101036090" value={message} placeholder={t("Veuillez ecrire votre message ici")} required onInvalid={e => e.target.setCustomValidity(i18n.t("Please, type your message"))}
                                        onInput={e => e.target.setCustomValidity('')} onChange={(e) => setMessage(e.target.value)} />
                                </div>


                                <div className="form_btn">
                                    <input className="send" type="submit" name="submit" value={t("Envoyer le formulaire")}/>
                            </div>

                            <div>
                                { mailSent &&
                                    <div>Thank you for contcting us.</div>
                                }
                            </div>

                            </form>
                            <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: "none" }} ></iframe>
                </div>

<div className="contact_details">
                            <h2>{t("Coordonnées")}</h2>

                            <p className="subtitle_contact">{t("Vous avez un projet et vous aimeriez que l'on en discute ? N'hésitez plus, contactez-moi !")} </p>


                    <ul>
                            <li> < FaUserTie className='IconContact'/>
                            <div className="contact_description">
                                <h3>{t("Nom")}</h3>
                                <p>Antoine HOELLINGER</p>
                            </div>
                        </li>

                            <li> <FaCity className='IconContact'/>
                                <div className="contact_description">
                                <h3>{t("Ville")}</h3>
                                <p>Paris - Toulouse - Lyon ( France ) | Remote</p>
                            </div>
                        </li>

                            <li> < FaPhoneAlt className='IconContact'/>
                                <div className="contact_description">
                                <h3>{t("Téléphone")}</h3>
                                <p id="phone"></p>
                              </div>
                                    </li>

                            <li> < FaEnvelopeOpenText className='IconContact'/>
                                <div className="contact_description">
                                        <h3>E-mail</h3>
                                        <p id="email" className="off"></p>
                              </div>
                                    </li>

                                </ul>
                                </div>
                                                                    
                </div>

            </div>
                </>
        )
    }

export default Form
