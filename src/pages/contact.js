import React, { Component } from 'react';
import './css/style.css';
import { motion } from 'framer-motion'
// import { FaRegEnvelope } from "react-icons/fa";

import { FaWpforms} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import EmailModal from '../components/Email/App'
import PhoneModal from '../components/Phone/App'


class Contact extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handle_resume = (e) => {
        e.preventDefault() 
        window.location.href = "https://docs.google.com/document/d/1rbhomGlocMqPsgOYH5hrnwpNH8izUMxPxR_1-2Urt5U/edit"
    }

    handle_linkedIn = (e) => {
        e.preventDefault() 
        window.location.href = "https://www.linkedin.com/in/wmwassmann/"
    }

    
    handle_gitHub = (e) => {
        e.preventDefault() 
        window.location.href = "https://github.com/wmwassmann"
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
                                <PhoneModal/>  
                                <div className='contact-content'>
                                    <a>Phone</a>
                                </div>
                            </div>

                            <br>
                            </br>

                            <div className='contact-selection'>
                                <button className='contact-icon' onClick={this.handle_resume}>
                                    <FaWpforms/>
                                </button>
                                <div className='contact-content'>
                                    <a>Resume</a>
                                </div>
                            </div>

                            <br>
                            </br>

                            <div className='contact-selection'>
                                
                                <button className='contact-icon' onClick={this.handle_linkedIn}>
                                    <FaLinkedin/>
                                </button>
                                <div className='contact-content'>
                                    <a>LinkedIn</a>
                                </div>
                            </div>

                            <br>
                            </br>

                            <div className='contact-selection'>
                                <button className='contact-icon' onClick={this.handle_gitHub}>
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