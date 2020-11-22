import React, { Component }  from 'react';
import myphotosmall from './img/IMG_8410.jpg'

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
  <div className="col-md-6" id="aboutme">
  <h1>William Wassmann</h1>
      <img src={myphotosmall} className="img-fluid float-left" alt='personalimage'></img>
  <p2>About Me</p2>

  <p>I am a full-stack developer having recently graduated from the University of Washington Web Developer's Bootcamp.</p>
  <p>Before taking this course, I knew little to nothing about the innerworkings of how websites worked. But now, if there is 
  one thing that I learned from this course, it's that the coding world is a constantly evolving beast, and while I learned much 
  from my fantastic coding bootcamp, there is still so much more out there to learn. 
   </p>

   <p>
     My passion in the coding world is to consider consumer response and build the application to fit the buyer's needs and 
     expectations. If I have gained the buyer's satisfaction, then I have succeeded as a full-stack developer.
   </p>

</div>
  <div className="col-md-6" id="aboutme">
  <h1>Proficiencies</h1>
      

  <p> 
    I am proficient in the following languages.
<div className="proficiencies">
  <ul className="col-md-6 left">
    <li>html</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>jQuery</li>
    <li>Node</li>
  </ul>

  <ul className="col-md-6 right">
    <li>Ajax</li>
    <li>Handlebars</li>
    <li>Constructors</li>
    <li>Mongoose</li>
    <li>React</li>    
  </ul>
  </div>
  </p>

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

export default AboutMe;