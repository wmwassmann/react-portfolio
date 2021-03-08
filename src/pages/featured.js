import React, { Component }  from 'react';
import RPGAdventurersAcademyLogin from './img/login.png'
import RPGAdventurersAcademyAudit  from './img/audit.png'
import RpgMain from './img/login.png'
import RpgAudit from './img/audit.png'





class Featured extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        
            return (

            
<main className="container">      


      <div className="row">
      <div className="col-md-10" id="featured-app">
      <h1>RPG: Adventurer's Academy</h1>

      <div className='intro'>
      <div className='photoline'>
        <img src={RpgMain} className="img-fluid float-left rpg1" alt='rpg-1'></img>
        <img src={RpgAudit} className="img-fluid float-left rpg2" alt='rpg-2'></img>
  
      </div>
      
          <p> All three projects of my web development bootcamp were a combined effort of myself with four fantastic Web Developers. 
          We are the proud creators of <a href="https://github.com/rickyfuk/dnd-buddy-3.0">The RPG: Adventurer's Academy</a>
          </p>
     
      </div>
            
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

      Future developments for this project include:
      

            <ul>
              <li>A student guidebook packed with a wealth of simplified knowledge</li>
              <li>A training hall which allows the student to practice certain simple ingame scenarios</li>
              <li>A quiz hall which will test student knowledge and possibly unlock new classes or features to study and play with.</li>
              <li>A fully functional Dungeon Master feature, which will be the final unlock of the "story mode"</li>
            </ul>

      <p>Our application has been awarded <i>"Most likely to get funded"</i>, <i>"Best in show"</i>, and <i>"Most technical"</i> throughout its development, and we plan to continue working on it into 2021.</p>

      

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

export default Featured;