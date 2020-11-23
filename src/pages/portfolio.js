import React, { Component }  from 'react';
import Carousel from '../components/Carousel/Carousel.js'


class Portfolio extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        
            return (
// <!-- Portfolio with thumbnails linking to deployments/repositories; projects pending to display for now-->

            
<main className="container">
              <Carousel /> 
    {/* <!-- Projects section --> */}  
</main>

            );
        }
    }

export default Portfolio;