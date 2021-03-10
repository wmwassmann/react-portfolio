import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import myphotosmall from './../../pages/img/login.png'
import './css/style.css'
import { Typography } from '@material-ui/core';
import Typed from "react-typed";



class AboutMe extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {

        return (
            <main className="container">

                <div className="row">
                    <div className="col-md-10" id="aboutme">
                        <h1>Featured Project</h1>
                    
                        <img src={myphotosmall} className="img-fluid float-left wmw-photo" alt='personalimage'></img>
                            <div className='next-button'>
                            <Link to={'/2'}>
                Continue
         </Link>
                        </div>
                        <div className='text-body'>
                        <Typography variant="h4">
                            

                                <Typed strings={['When pitching the project to my teammates, my vision was simple: create an application that made Dungeons and Dragons accessible to anyone.']} typeSpeed={40} />


                           
                        </Typography>
                        </div>
                    </div>
                
                </div>

                {/* <!-- This empty row/column extends the white box size at the bottom --> */}
                <div className="row">
                    <div className="col-md-8" style={{ margin: '0', paddingTop: '50px' }}>
                    </div>

                </div>




            </main>
        );
    }
}

export default AboutMe;

