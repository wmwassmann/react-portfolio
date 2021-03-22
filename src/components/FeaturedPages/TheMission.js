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
        window.location.href='https://rpgacademy.herokuapp.com/';
        e.preventDefault();
    }

    render() {

        return (
            <main className="container">

                <div className="row featured-cont">
                    <div className="col-md-10" id="aboutme">
                        <h1>The Mission</h1>

                        <img src={myphotosmall} className="img-fluid float-left wmw-photo" alt='personalimage'></img>
                       
                         
                       
                        <div className='text-body'>
                            <h4>
                                Designed to be a fun and interactive learning tool turning complicated character sheets into bite sized chunks allowing for
                                easy consumption. A constant question that arises when playing an RPG with newer players is "where is that number?"

                                With our mobile friendly page selection giving the user simple choices to choose from, such as attack or defense, we are
                                able to guild them directly to the numbers they need rather than force them to scan a large and confusing character sheet.
                            </h4>
                        </div>
                        
                    </div>
                    <div className='buttons-container'> 
                        <button className='secondary-button' onClick={this.handle_link}>
                            Deployed
                        </button>
                    <div className='next-button'>
                            <Link to={'/3'}>
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

