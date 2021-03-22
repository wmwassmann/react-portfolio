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

    handle_link = (e) => {
        window.location.href = 'https://github.com/rickyfuk/dnd-buddy-3.0';
        e.preventDefault();
    }

    render() {

        return (
            <main className="container">
                <div className="row" id='tools-cont'>
                    <div className="col-md-10" id="aboutme">
                        <h1>Tools</h1>

                        <img src={myphotosmall} className="img-fluid float-left wmw-photo" alt='personalimage'></img>



                        <div className='text-body'>
                            <h4 className='tech'>
                                <p>
                                    RPG: Adventurer's Academy uses following technology:
                                </p>
                                <div>
                                    <ul>
                                        <li>
                                            Javascript
                                    </li>
                                        <li>
                                            jQuery
                                    </li>
                                        <li>
                                            React
                                    </li>
                                        <li>
                                            MongoDB
                                    </li>
                                        <li>
                                            MySQL
                                    </li>
                                        <li>
                                            Node.js
                                    </li>
                                    </ul>
                                </div>
                            </h4>
                        </div>

                    </div>
                    <div className='buttons-container tool-buttons'>
                        <button className='secondary-button' onClick={this.handle_link}>
                            Repository
                        </button>
                        <div className='next-button'>
                            <Link to={'/4'}>
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
