import React, { Component } from 'react';
import Carousel from '../components/Carousel/Carousel.js'


class Portfolio extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {

        return (        
            
            <main className='carousel-container' id='carousel-container'>
                <Carousel />
            </main>

        );
    }
}

export default Portfolio;