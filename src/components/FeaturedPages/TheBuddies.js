import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import myphotosmall from './../../pages/img/login.png'
import './css/style.css'
import { AnimatePresence, motion } from 'framer-motion'
import DevProfiles from './DevButtons/DevProfiles';
import CycleButtonLeft from './CycleButtons/CycleButtonLeft';
import CycleButtonRight from './CycleButtons/CycleButtonRight';


class AboutMe extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {

        return (
            <div className='featured-row'>
                <div>
                    <CycleButtonLeft />
                </div>
                <motion.div className="featured-container" initial={{ x: -1500, opacity: 0 }} exit={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <h1>My Teammates</h1>

                    <div className='developer-container'>
                        <DevProfiles />
                        <div className='text-body'>
                            <h4>
                                When pitching the project to my teammates, my vision was simple: create an application that made Dungeons and Dragons accessible to anyone.
                                High Fantasy roleplaying games contain vast amounts of rules, statistics, interactions, feats, etc. I've had many close friends either quit soon after starting a session,
                                or simply turn me down all together due to such a harsh entry level environment. Enter The RPG: Adventurer's Academy.
                            </h4>
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

