import React, { Component } from 'react';
import myphotosmall from './img/IMG_8410.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Skills from '../components/Skills/Skills';


class AboutMe extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  handle_resume = (e) => {
    e.preventDefault()
    window.location.href = "https://docs.google.com/document/d/1rbhomGlocMqPsgOYH5hrnwpNH8izUMxPxR_1-2Urt5U/edit"
  }


  render() {

    return (
      <motion.main className="container" id="aboutme-container" initial={{ x: -1500, opacity: 0 }} exit={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>

        <div className="row text-body">
          <div id="aboutme">
            <h1><strong>WILLIAM WASSMANN</strong></h1>

            <img src={myphotosmall} className="img-fluid float-left wmw-photo" alt='personalimage'></img>

            <h4 className='about-me'><strong>About Me</strong></h4>

            <article className='about-me-text'>
              <h6>
                <p>
                  I am a full-stack developer who recently graduated from the University of Washington's Web Development Bootcamp.
                </p>
                <p>
                  Through this course I discovered that the coding world is a constantly evolving beast, and there will always be more to learn.  I am eager to improve my web-development skills.
                </p>
                <p>
                  My passion in the coding world is to build applications to fit consumers' needs and
                  expectations.
                </p>
                <p>
                  Welcome to my portfolio, which I use to practice and improve my Reactjs and Native skills.
                </p>
              </h6>
            </article>
            <div className='skills-container'>
              <Skills />
            </div>
          </div>

        </div>

      </motion.main>
    );
  }
}

export default AboutMe;
