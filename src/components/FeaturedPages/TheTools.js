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
        window.location.href = 'https://github.com/rickyfuk/dnd-buddy-3.0';
        e.preventDefault();
    }

    render() {

        return (
            <div>

            <motion.div className="featured-container" initial={{ x: -1500, opacity: 0 }} exit={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                        <h1>The Tools</h1>

                        <img src={myphotosmall} className="img-fluid float-left buddies-photo" alt='personalimage'></img>



                        <div className='text-body'>
                            <h4 className='tech'>
                                <p>
                                    RPG: Adventurer's Academy uses following technology:
                                </p>
                                <div>
                                    <ul>
                                        <li>
                                            Javascript
                                    </li>
                                        <li>
                                            jQuery
                                    </li>
                                        <li>
                                            React
                                    </li>
                                        <li>
                                            MongoDB
                                    </li>
                                        <li>
                                            MySQL
                                    </li>
                                        <li>
                                            Node.js
                                    </li>
                                    </ul>
                                </div>
                            </h4>
                        </div>

                    </motion.div>
                    <div className='buttons-container'>
                        <button className='secondary-button' onClick={this.handle_link}>
                            Repository
                        </button>
                        <div className='next-button'>
                            <Link to={'/4'}>
                                Continue
                            </Link>
                        </div>

                    </div>
                </div>

        );
    }
}

export default AboutMe;
