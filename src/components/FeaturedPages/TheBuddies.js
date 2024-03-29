
import React, { Component } from 'react';
import './css/style.css'
import { motion } from 'framer-motion'
import DevProfiles from './DevButtons/DevProfiles';
import CycleButtonLeft from './CycleButtons/CycleButtonLeft';
import CycleButtonRight from './CycleButtons/CycleButtonRight';


class AboutMe extends Component {

    // JS has an api to push the browser.
    // history

    
    render() {

        return (
            <div className='featured-row text-body rpgaa-main'>
                <div>
                    <CycleButtonLeft />
                </div>
                <motion.div className="featured-container" initial={{ x: -1500, opacity: 0 }} exit={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <h1>My Teammates</h1>
                    <div className='featured-content teammates'>
                        <div className='teammates-text'>
                            <h3>
                                Select a developer to see their contributions and contact information.
                            </h3>
                        </div>
                        <div className='developer-container'>
                            <DevProfiles />
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

