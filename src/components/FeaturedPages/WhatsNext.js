
import React, { Component } from 'react';
import myphotosmall from './../../pages/img/rpgaa/welcome.png'
import './css/style.css'
import { motion } from 'framer-motion'

import CycleButtonLeft from './CycleButtons/CycleButtonLeft';
import CycleButtonRight from './CycleButtons/CycleButtonRight';

class AboutMe extends Component {
  
    render() {

        return (
            <div className='featured-row'>
                <div>
                    <CycleButtonLeft />
                </div>
                <motion.div className="featured-container" initial={{ x: -1500, opacity: 0 }} exit={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <h1>The Future</h1>
                    <div className='featured-content'>
                    <img src={myphotosmall} className="img-fluid float-left welcome-photo" alt='personalimage'></img>



                    <div className='future-text'>
                        <h6>
                           Currently, our plans are to continue building RPG:AA and eventually push the application into production. 
                           <br>
                           </br>
                           <br>
                           </br>
                           Our vision for v4.0 consists of optimizing our <a href='https://rpgacademy.herokuapp.com/create'>Character Creation Mode</a>, 
                           reworking the CSS our <a href='https://rpgacademy.herokuapp.com/savedcharacters'>Saved Characters</a> section, and starting on our 
                           <a href='https://rpgacademy.herokuapp.com/dungeonmaster'> Dungeon Master Mode</a>.
                           <br>
                           </br>
                           <br>
                           </br>
                           However, our most exciting new feature will be a full rework of the application's user experience. Featuring a simple story 
                           mode where a fantasy university professor helps their new student navigate the often difficult task of tackling "first time" character creation. 
                        </h6>
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
