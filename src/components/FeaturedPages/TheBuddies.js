import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import myphotosmall from './../../pages/img/login.png'
import './css/style.css'




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
                        <h1>The Developers</h1>

                        <img src={myphotosmall} className="img-fluid float-left wmw-photo" alt='personalimage'></img>
                        <div className='developer-container'>

                            <div className='text-body'>
                                <h4>
                                    When pitching the project to my teammates, my vision was simple: create an application that made Dungeons and Dragons accessible to anyone.
                                    High Fantasy roleplaying games contain vast amounts of rules, statistics, interactions, feats, etc. I've had many close friends either quit soon after starting a session,
                                    or simply turn me down all together due to such a harsh entry level environment. Enter The RPG: Adventurer's Academy.
                            </h4>
                            </div>


                        </div>

                    </div>
                    <div className='buttons-container'>
                        <div className='secondary-button'>
                            <Link to={'/profiles'}>
                                The Team
                            </Link>
                        </div>
                        <div className='next-button'>
                            <Link to={'/2'}>
                                Continue
                            </Link>
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

