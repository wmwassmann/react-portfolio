import React from 'react'

export default function email() {

    function sendEmail (e) {

    }

    return (
        <div>
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
                            <input type='subject' className='btn btn-info' value='Send Message'></input>                            
                        </div>
                    </div>
                </form>
        </div>
    )
}
