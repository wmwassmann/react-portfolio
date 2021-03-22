import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import rpgaa from './../../pages/img/rpgaa/demo.png'
import './css/style.css'




class AboutMe extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    handleLink = (e) => {
        window.location.href='https://github.com/rickyfuk/dnd-buddy-3.0'
        e.preventDefault();
    }

    render() {


        return (
            <main className="container">

                <div className="row featured-cont">
                    <div className="col-md-10" id="aboutme">
                        <h1>Introduction</h1>

                        <img src={rpgaa} className="img-fluid float-left wmw-photo" alt='personalimage'></img>
                        <div className='text-body'>
                            <h5>
                                All three projects of my web development bootcamp were a combined effort of myself with four fantastic Web Developers.
                            </h5>
                        </div>
                        
                    </div>        
                    <div className='buttons-container'> 
                    <div className='next-button'>
                            <Link to={'/1'}>
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
