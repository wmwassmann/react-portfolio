
import React, { Component } from 'react';
import myphotosmall from './../../pages/img/rpgaa/mobile.png'
import { FaDotCircle } from "react-icons/fa";
import './css/style.css'
import { motion } from 'framer-motion'
import CycleButtonLeft from './CycleButtons/CycleButtonLeft';
import CycleButtonRight from './CycleButtons/CycleButtonRight';


class AboutMe extends Component {

    handle_link = (e) => {
        window.location.href = 'https://rpgacademy.herokuapp.com/';
        e.preventDefault();
    }

    render() {

        return (
            <div className='featured-row text-body rpgaa-main'>
                <div>
                    <CycleButtonLeft />
                </div>
                <motion.div className="featured-container" initial={{ x: -1500, opacity: 0 }} exit={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <h1>Our Mission</h1>
                    <div className='featured-content mission'>
                        <div className='mission-text'>
                            <h4>
                                Designed to be a fun and interactive learning tool turning complicated character sheets into bite sized chunks allowing for
                                easy consumption. A constant question that arises when playing an RPG with newer players is "where is that number?"
                            </h4>
                            <hr></hr>
                            <h4>
                                With our mobile friendly page selection giving the user simple choices to choose from, such as attack or defense, we are
                                able to guild them directly to the numbers they need rather than force them to scan a large and confusing character sheet.
                            </h4>
                            <hr></hr>
                            <h4>
                                Click the mobile device to view our deployed page.   
                            </h4>
                            <button className='deployed-featured' onClick={this.handle_link}>
                                <img src={myphotosmall} className="img-fluid mobile-photo" alt='personalimage'></img>
                                <FaDotCircle className='dot'/>
                            </button>
                        </div>


                    </div>

                </motion.div>
                <div>
                    <CycleButtonRight />
                </div>


            </div>






        );
    }
}

export default AboutMe;

