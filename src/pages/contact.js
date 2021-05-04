import React, { Component } from 'react';
import './css/style.css';
import { motion } from 'framer-motion'
// import { FaRegEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaWpforms} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import EmailModal from '../components/Email/App'


class Contact extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {

        return (

            // <!-- Contact info -->

            <motion.main className="container" initial={{ x: -1500, opacity: 0 }} exit={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>

                <div className="row">
                    <div className="col-md-10" id="aboutme">

                        <h1>Contact Me</h1>
                        <div className='contact-container container'>

                            <div className='contact-selection'>
                                <EmailModal/>                             
                                <div className='contact-content'>
                                    <a>Email</a>
                                </div>
                            </div>

                            <br>
                            </br>

                            <div className='contact-selection'>
                                <button className='contact-icon'>
                                    <FaPhone/>
                                </button>
                                <div className='contact-content'>
                                    <a>Phone</a>
                                </div>
                            </div>

                            <br>
                            </br>

                            <div className='contact-selection'>
                                <button className='contact-icon'>
                                    <FaWpforms/>
                                </button>
                                <div className='contact-content'>
                                    <a>Resume</a>
                                </div>
                            </div>

                            <br>
                            </br>

                            <div className='contact-selection'>
                                
                                <button className='contact-icon'>
                                    <FaLinkedin/>
                                </button>
                                <div className='contact-content'>
                                    <a>LinkedIn</a>
                                </div>
                            </div>

                            <br>
                            </br>

                            <div className='contact-selection'>
                                <button className='contact-icon'>
                                    <FaGithub/>
                                </button>
                                <div className='contact-content'>
                                    <a>Github</a>
                                </div>
                            </div>
                        </div>





                    </div>
                </div>

            </motion.main>


        );
    }
}

export default Contact;