
import React, { Component } from 'react';
import rpgaa from './../../pages/img/rpgaa/demo.png'
import './css/style.css'
import { motion } from 'framer-motion'
import CycleButtonLeft from './CycleButtons/CycleButtonLeft';
import CycleButtonRight from './CycleButtons/CycleButtonRight';



class AboutMe extends Component {

    handleLink = (e) => {
        window.location.href = 'https://github.com/rickyfuk/dnd-buddy-3.0'
        e.preventDefault();
    }

    render() {


        return (
            <div className='featured-row text-body'>

                <div>
                    <CycleButtonLeft />
                </div>
                
                <motion.div className="featured-container" initial={{ x: -1500, opacity: 0 }} exit={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              
                    <h1>An Introduction...</h1>
                <div className='featured-content'> 
                    <img src={rpgaa} className="img-fluid float-left rpgaa-initial-photo" alt='personalimage'></img>
                    <div>
                        <h5>
                            The RPG: Adventurer's Academy was founded with a sole purpose in mind. 
                            Make learning to play role playing games fun, interactive, and user-friendly for beginners. 
                            Our story is unique amonst our peers, as we were the only team to stick together work a 
                            single project during our Web Development Boot-camp from Project One in our through Project Three.  
                        </h5>
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
