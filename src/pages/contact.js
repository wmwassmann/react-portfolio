import React, { Component } from 'react';
import './css/style.css';
import { motion } from 'framer-motion'


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

                        {/* <!-- Links to contact information --> */}
                        <h1>Contact Me</h1>



                        {/* <!-- E-mail --> */}
                        E-mail: <a href="mailto:wmwassmann@hotmail.com">wmwassmann@hotmail.com</a>

                        <br>
                        </br>

                        {/* <!-- Phone --> */}
                        Phone: 253-792-1330

                        <br>
                        </br>
                        {/* Research what to put as far as job projection - ask Kevin Faan */}
                        {/* <!-- Resume --> */}
                        {/* change Portfolio to hyperlink and rework the routing to be more user friendly for laypeople like mom */}
                        <a href="https://docs.google.com/document/d/1rbhomGlocMqPsgOYH5hrnwpNH8izUMxPxR_1-2Urt5U/edit">Resume</a>
                        <br>
                        </br>
                        {/* <!-- LinkedIn --> */}
                        <a href="https://www.linkedin.com/in/william-wassmann-287a14a4/">LinkedIn</a>
                        <br>
                        </br>

                        {/* <!-- Github --> */}
                        <a href="https://github.com/wmwassmann">Github</a>






                    </div>
                </div>

            </motion.main>


        );
    }
}

export default Contact;