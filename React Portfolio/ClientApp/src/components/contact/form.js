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


    const handleFormSubmit = e => {
        const API_PATH = 'http://localhost/api/contact/index.php';
        e.preventDefault();
                axios({
                    method: 'post',
                    url: `${API_PATH}`,
                    headers: { 'content-type': 'application/json' },
                    data: this.state
                })
                    .then(result => {
                        this.setState({
                            mailSent: result.data.sent
                        })
                    })
                    .catch(error => this.setState({ error: error.message }));
            };


        return (
            <>

                <div className="title">
                    <h1>{t("Me Contacter")}</h1>
                    <div className="subline"></div>
                </div>

            <div className="main_contact_container">

            <div className='contact_items'>


                    <div className="form">

                            <h2>{t("Formulaire")}</h2>

                            <form method="post" action="#">

                                <div className="form_content">
                                    <input type="text" id="fname" name="firstname" value={fname} placeholder={t("Prénom")} required onInvalid={e => e.target.setCustomValidity(i18n.t("Please, enter your First Name"))}
                                    onInput={e => e.target.setCustomValidity('')} onChange={e => setFname({ fname: e.target.value })} />
                                </div>


                                <div className="form_content">
                                    <input type="text" id="name" name="name" value={name} placeholder={t("Nom")} required onInvalid={e => e.target.setCustomValidity(i18n.t("Please, type your Last Name"))}
                                    onInput={e => e.target.setCustomValidity('')} onChange={e => setName({ name: e.target.value })} />
                                </div>

                                <div className="form_content">
                                    <input type="email" id="email" name="email" value={email} placeholder="E-mail" required onInvalid={e => e.target.setCustomValidity(i18n.t("Please, type your e-mail adresse"))}
                                    onInput={e => e.target.setCustomValidity('')} onChange={e => setEmail({ email: e.target.value })} />
                                </div>


                                <div className="form_content">
                                    <input type="text" id="subject" name="subject" value={subject} placeholder={t("Sujet")} required onInvalid={e => e.target.setCustomValidity(i18n.t("Please, type your message title"))}
                                    onInput={e => e.target.setCustomValidity('')} onChange={e => setSubject({ subject: e.target.value })} />
                                </div>


                                <div className="form_content">
                                    <input type="text" id="message" name="message" value={message} placeholder={t("Veuillez ecrire votre message ici")} required onInvalid={e => e.target.setCustomValidity(i18n.t("Please, type your message"))}
                                    onInput={e => e.target.setCustomValidity('')} onChange={e => setMessage({ message: e.target.value })} />
                                </div>


                                <div className="form_btn">
                                    <input className="send" type="submit" name="submit" onClick={e => handleFormSubmit(e)} value={t("Envoyer le formulaire")}/>
                            </div>

                            <div>
                                { mailSent &&
                                    <div>Thank you for contcting us.</div>
                                }
                            </div>

                            </form>
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
