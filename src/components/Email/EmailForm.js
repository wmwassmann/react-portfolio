import React from 'react'
import './css/style.css'
import emailjs from 'emailjs-com'

export default function email() {

    function sendEmail (e) {
        e.preventDefault();

        emailjs.sendForm('service_3wz5hqt', 'portfolio_template', e.target, 'user_sYew40GfOFtCu5bdIyTGd')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          console.log('works')
    }

    return (
        <div className='email-container'>
                 <form onSubmit={sendEmail}>
                    <div className='row pt-5 mx-auto'>
                        <div className='col-8 form-group mx-auto'>
                            <input type='text' className='form-control' placeholder='Name' name='name'/>
                        </div>
                        <div className='col-8 form-group pt-2 mx-auto'>
                            <input type='email' className='form-control' placeholder='Email Address' name='email'/>
                        </div> 
                        <div className='col-8 form-group pt-2 mx-auto'>
                            <input type='text' className='form-control' placeholder='Subject' name='subject'/>
                        </div>
                        <div className='col-8 form-group pt-2 mx-auto'>
                            <textarea className='form-control' id='text-id' cols='30' rows='8' placeholder='Your Message' name='message'></textarea>
                        </div>
                        <div className='col-8 pt-3 mx-auto'>
                            <input type='submit' className='btn btn-info' value='Send Message'></input>                            
                        </div>
                    </div>
                </form>
        </div>
    )
}
