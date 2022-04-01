import React from "react";
import { FaUserTie, FaCity, FaPhoneAlt, FaEnvelopeOpenText } from 'react-icons/fa';

class Form extends React.Component {


    render() {

        return (
            <div className="main_contact_container">

            <div className='contact_items'>


                    <div className="form">

                        <h2>Formulaire</h2>

                            <form method="post" action="controller.php">

                                <div className="form_content">
                                <input type="text" name="firstname" placeholder="First Name" required onInvalid={e => e.target.setCustomValidity('Please, enter your First Name')}
                                    onInput={e => e.target.setCustomValidity('')} />
                                </div>


                                <div className="form_content">
                                <input type="text" name="name" placeholder="Name" required onInvalid={e => e.target.setCustomValidity('Please, type your Last Name')}
                                    onInput={e => e.target.setCustomValidity('')} />
                                </div>

                                <div className="form_content">
                                <input type="email" name="email" placeholder="E-mail" required onInvalid={e => e.target.setCustomValidity('Please, type your e-mail adresse')}
                                    onInput={e => e.target.setCustomValidity('')} />
                                </div>


                                <div className="form_content">
                                <input type="text" name="subject" placeholder="Subject" required onInvalid={e => e.target.setCustomValidity('Please, type your message title')}
                                    onInput={e => e.target.setCustomValidity('')} />
                                </div>


                                <div className="form_content">
                                <input type="text" name="message" placeholder="Type your Message" required onInvalid={e => e.target.setCustomValidity('Please, type your message')}
                                    onInput={e => e.target.setCustomValidity('')} />
                                </div>


                                <div className="form_btn">
                                    <input className="send" type="submit" name="submit" value="Envoyer le formulaire" />
                                </div>

                            </form>
                </div>

<div className="contact_details">
                    <h2>Contact Details</h2>

                    <p className="subtitle_contact">Do you have a project and would like to discuss it together? Do not hesitate, contact me ! </p>


                    <ul>
                            <li> < FaUserTie className='IconContact'/>
                            <div className="contact_description">
                                <h3>Name</h3>
                                <p>Antoine HOELLINGER</p>
                            </div>
                        </li>

                            <li> <FaCity className='IconContact'/>
                                <div className="contact_description">
                                <h3>City</h3>
                                <p>Paris - Toulouse - Lyon ( France ) | Remote</p>
                            </div>
                        </li>

                            <li> < FaPhoneAlt className='IconContact'/>
                                <div className="contact_description">
                                <h3>Téléphone</h3>
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

        )
    }
}

export default Form
