import React, { Component } from 'react';
import Carousel from '../components/Carousel/Carousel.js'
import { AnimatePresence, motion } from 'framer-motion'

class Portfolio extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {

        return (        
         
            <motion.main className='carousel-container' id='carousel-container' initial={{ x: -1500, opacity: 0 }} exit={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <Carousel />
            </motion.main>
        
        );
    }
}

export default Portfolio;