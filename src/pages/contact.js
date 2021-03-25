import React, { Component }  from 'react';
import './css/style.css';



class Contact extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        
            return (

// <!-- Contact info -->

<main className="container">

<div className="row">
    <div className="col-md-10" id="aboutme">

{/* <!-- Links to contact information --> */}
    <h1>Contact Me</h1>
    
      <ul>

        {/* <!-- E-mail --> */}
        <li className='email'>E-mail: <a href="mailto:wmwassmann@hotmail.com">wmwassmann@hotmail.com</a>
        </li>

        {/* <!-- Phone --> */}
        <li>Phone: 253-792-1330</li>
{/* Research what to put as far as job projection - ask Kevin Faan */}
        {/* <!-- Resume --> */}
   {/* change Portfolio to hyperlink and rework the routing to be more user friendly for laypeople like mom */}
        <li><a href="https://docs.google.com/document/d/1rbhomGlocMqPsgOYH5hrnwpNH8izUMxPxR_1-2Urt5U/edit">Resume</a>

        {/* <!-- LinkedIn --> */}
        <li><a href="https://www.linkedin.com/in/william-wassmann-287a14a4/">LinkedIn</a>
        </li> 

        {/* <!-- Github --> */}
        <li><a href="https://github.com/wmwassmann">Github</a>
        </li> 
        
       
        </li> 
        

       </ul>

    </div>
</div>

</main>


            );
        }
    }

export default Contact;