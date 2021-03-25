import React, { Component } from 'react';
import myphotosmall from './img/IMG_8410.jpg'



class AboutMe extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {

    return (
      <main className="container" id="aboutme-container">

        <div className="row">
          <div className="col-md-10" id="aboutme">
            <h1>William Wassmann</h1>
            <img src={myphotosmall} className="img-fluid float-left wmw-photo" alt='personalimage'></img>
            <h3>About Me</h3>

            <p>I am a full-stack developer who recently graduated from the University of Washington's Web Development Bootcamp.</p>
            <p>
              Through this course I discovered that the coding world is a constantly evolving beast, and there will always be more to learn.  I am eager to improve my web-development skills.
            </p>
            <p>
              My passion in the coding world is to build applications to fit consumers' needs and
              expectations.
              </p>
            <p>
              Welcome to my portfolio, which I view as my playground and a place to showcase my skills.
              </p>
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
