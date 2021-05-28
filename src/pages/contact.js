import React, { Component } from 'react';
import './css/style.css';
import { motion } from 'framer-motion'

import { FaWpforms} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Email from '../components/Email/EmailApp.js';
import Phone from '../components/Phone/PhoneApp.js';


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
                                <Email/>                             
                                <div className='contact-content'>
                                    <p>Email</p>
                                </div>
                            </div>

                            <br>
                            </br>

                            <div className='contact-selection'>
                                <Phone/>  
                                <div className='contact-content'>
                                    <p>Phone</p>
                                </div>
                            </div>

                            <br>
                            </br>

                            <div className='contact-selection'>
                                <button className='contact-icon' onClick={this.handle_resume}>
                                    <FaWpforms/>
                                </button>
                                <div className='contact-content'>
                                    <p>Resume</p>
                                </div>
                            </div>

                            <br>
                            </br>

                            <div className='contact-selection'>
                                
                                <button className='contact-icon' onClick={this.handle_linkedIn}>
                                    <FaLinkedin/>
                                </button>
                                <div className='contact-content'>
                                    <p>LinkedIn</p>
                                </div>
                            </div>

                            <br>
                            </br>

                            <div className='contact-selection'>
                                <button className='contact-icon' onClick={this.handle_gitHub}>
                                    <FaGithub/>
                                </button>
                                <div className='contact-content'>
                                    <p>Github</p>
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