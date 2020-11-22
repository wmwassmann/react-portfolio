import React, { Component }  from 'react';
import javascriptquiz from './img/quiz.png'
import passwordgenerator from './img/password.png'
import weatherdashboard from './img/weather.png'
import workdayscheduler from './img/planner.png'
import dndbuddy from './img/dndbuddy.png'
import mobile from './img/mobile-models.png'

import RPGAdventurersAcademyLogin from './img/login.png'
import RPGAdventurersAcademyAudit  from './img/audit.png'


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

    <div className="row">
      <div className="col-md-8" id="portfolio">
      <h1>Portfolio</h1>

      <a href="https://github.com/wmwassmann/Homework-04-Quiz">
      <img src={javascriptquiz} className="img-fluid" id='pimg1' alt='code-quiz'/>
      </a>

      <a href="https://github.com/wmwassmann/03-Homework">
      <img src={passwordgenerator} className="img-fluid" id='pimg2' alt='password-generator'/>
      </a>

      <a href="https://github.com/wmwassmann/Homework-06-Weatherdash">
      <img src={weatherdashboard} className="img-fluid" id='pimg3' alt='weather-dashboard'/>
      </a>

      <a href="https://github.com/wmwassmann/Homework-05-Calendar">
      <img src={workdayscheduler} className="img-fluid" id='pimg4' alt='workday-scheduler'/>
      </a>

      <a href="https://github.com/wmwassmann/dndbuddy-1">
      <img src={dndbuddy} className="img-fluid" id='pimg5' alt='20-sided-die'/>
      </a>

      <a href="https://github.com/wmwassmann/dnd-buddy-2.0">
      <img src={mobile} className="img-fluid" id='pimg5' alt='20-sided-die'/>
      </a>
      </div>
    </div>

    {/* <!-- Projects section --> */}
    <div className="row">
      <div className="col-md-8" id="portfolio">
      <h1>DnD Buddy</h1>
      <p> All three projects of my web development bootcamp were a combined effort of myself with four fantastic Web Developers. 
        We are the proud creators of <a href="https://github.com/rickyfuk/dnd-buddy-3.0">The RPG: Adventurer's Academy</a>
            
            <ul>
              <li><a href="https://github.com/rickyfuk">Chung Hei Fuk</a></li>
              <li><a href="https://github.com/behrenskarl">Karl Behrens</a></li>
              <li><a href="https://github.com/DavidVDeaton">David Deaton</a></li>
              <li><a href="https://github.com/jam-madrigal">Alex Madrigal</a></li>
            </ul>

      When pitching the project to my teammates, my vision was simple: create an application that made Dungeons and Dragons accessible to anyone.
      High Fantasy roleplaying games contain vast amounts of rules, statistics, interactions, feats, etc. I've had many close friends either quit soon after starting a session,
      or simply turn me down all together due to such a harsh entry level environment. Enter The RPG: Adventurer's Academy. 

      <p>Designed to be a fun and interactive learning tool turning complicated character sheets into bite sized chunks allowing for 
      easy consumption. A constant question that arises when playing an RPG with newer players is "where is that number?"</p>

      With our mobile friendly page selection giving the user simple choices to choose from, such as attack or defense, we are 
      able to guild them directly to the numbers they need rather than force them to scan a large and confusing character sheet.

      Future developments for this project include

            <ul>
              <li>A student guidebook packed with a wealth of simplified knowledge</li>
              <li>A training hall which allows the student to practice certain simple ingame scenarios</li>
              <li>A quiz hall which will test student knowledge and possibly unlock new classes or features to study and play with.</li>
              <li>A fully functional Dungeon Master feature, which will be the final unlock of the "story mode"</li>
            </ul>

      Our application has been awarded <i>"Most likely to get funded"</i>, <i>"Best in show"</i>, and <i>"Most technical"</i> throughout its development, and we plan to continue working on it into 2021.</p>

      

      <h3>Screenshots of the current version</h3>
      <ul>
      <li><a href={RPGAdventurersAcademyLogin}>Desktop view screenshot.</a></li>
      <li><a href={RPGAdventurersAcademyAudit}>Mobile view view screenshot.</a></li>
      </ul>



      </div>
    </div>

    {/* <!-- This empty row/column extends the white box size at the bottom --> */}
    <div className="row">
        <div className="col-md-8" style={{margin:'0', paddingTop: '50px'}}>
        </div>
    </div>
  
  </main>

            );
        }
    }

export default Portfolio;