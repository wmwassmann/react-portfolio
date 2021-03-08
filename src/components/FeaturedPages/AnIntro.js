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
                            <Link to={'/1'}>
                                Continue
                            </Link>
                        </div>

                        <Typography variant="h4">
                            <div className='text-body'>

                                <Typed strings={["All three projects of my web development bootcamp were a combined effort of myself with four fantastic Web Developers."]} typeSpeed={40} />


                            </div>
                        </Typography>
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
