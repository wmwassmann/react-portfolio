import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import rpgaa from './../../pages/img/rpgaa/demo.png'
import './css/style.css'
import { AnimatePresence, motion } from 'framer-motion'




class AboutMe extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    handleLink = (e) => {
        window.location.href = 'https://github.com/rickyfuk/dnd-buddy-3.0'
        e.preventDefault();
    }

    render() {


        return (
            <div>
                <motion.div className="featured-container" initial={{ x: -1500, opacity: 0 }} exit={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <div>
                        <h1>Introduction</h1>

                        <img src={rpgaa} className="img-fluid float-left rpgaa-initial-photo" alt='personalimage'></img>
                        <div className='text-body'>
                            <h5>
                                All three projects of my web development bootcamp were a combined effort of myself with four fantastic Web Developers.
                            </h5>
                        </div>

                    </div>
                </motion.div>
                <div className='buttons-container'>
                    <div className='next-button'>
                        <Link to={'/1'}>
                            Continue
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;
