
import React, { Component } from 'react';
import myphotosmall from './../../pages/img/github.png'
import './css/style.css'
import { motion } from 'framer-motion'
import CycleButtonLeft from './CycleButtons/CycleButtonLeft';
import CycleButtonRight from './CycleButtons/CycleButtonRight';


class AboutMe extends Component {

    handle_link = (e) => {
        window.location.href = 'https://github.com/rickyfuk/dnd-buddy-3.0';
        e.preventDefault();
    }

    render() {

        return (
            <div className='featured-row'>
                <div>
                    <CycleButtonLeft />
                </div>
                <motion.div className="featured-container" initial={{ x: -1500, opacity: 0 }} exit={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <h1>The Tools</h1>
                    <div className='featured-content'>
                        





                        <div className='tools-list'>
                            <h4 className='tech'>
                                <p4>
                                    RPG: Adventurer's Academy uses following technology:
                                </p4>
                                <div className='technology-list'>
                                    <ul>

                                        <a href='https://www.javascript.com/'> Javascript</a>
                                        <br></br>

                                        <a href='https://jquery.com/'> jQuery</a>
                                        <br></br>

                                        <a href='https://reactjs.org/'> React</a>
                                        <br></br>

                                        <a href='https://www.mongodb.com/cloud/atlas'> MongoDB</a>
                                        <br></br>

                                        <a href='https://www.mysql.com/'> MySQL</a>
                                        <br></br>

                                    </ul>

                                    <ul>

                                        <a href='http://www.dnd5eapi.co/'> D&D 5e API</a>
                                        <br></br>

                                        <a href='https://get.foundation/sites/docs/'> Foundation 6</a>
                                        <br></br>

                                        <a href='https://www.w3.org/Style/CSS/Overview.en.html'>CSS</a>
                                        <br></br>

                                        <a href='https://fontawesome.com/'>Font Awesome</a>
                                        <br></br>

                                        <a href='https://nodejs.org/en/'> Node.js</a>

                                    </ul>
                                </div>

                            </h4>
                        </div>
                        <div className='tools-aside'>
                        <aside className='tools-text'>
                            Please visit our GitHub for a full README.md detailing how these tools were put to use.
                        </aside>
                        <button className='repository-button' onClick={this.handle_link}>
                            <img src={myphotosmall} className="img-fluid float-left github-repo" alt='personalimage'></img>
                        </button>
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
