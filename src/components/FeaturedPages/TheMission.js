import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import myphotosmall from './../../pages/img/login.png'
import './css/style.css'
import { AnimatePresence, motion } from 'framer-motion'



class AboutMe extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handle_link = (e) => {
        window.location.href = 'https://rpgacademy.herokuapp.com/';
        e.preventDefault();
    }

    render() {

        return (
            <div>

            <motion.div className="featured-container" initial={{ x: -1500, opacity: 0 }} exit={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                        <h1>The Mission</h1>

                        <img src={myphotosmall} className="img-fluid float-left buddies-photo" alt='personalimage'></img>



                        <div className='text-body'>
                            <h4>
                                Designed to be a fun and interactive learning tool turning complicated character sheets into bite sized chunks allowing for
                                easy consumption. A constant question that arises when playing an RPG with newer players is "where is that number?"

                                With our mobile friendly page selection giving the user simple choices to choose from, such as attack or defense, we are
                                able to guild them directly to the numbers they need rather than force them to scan a large and confusing character sheet.
                            </h4>
                        </div>

                    </motion.div>
                    <div className='buttons-container'>
                        <button className='secondary-button' onClick={this.handle_link}>
                            Deployed
                        </button>
                        <div className='next-button'>
                            <Link to={'/3'}>
                                Continue
                            </Link>
                        </div>
                    </div>
                </div>
              

   



        );
    }
}

export default AboutMe;

