import React from 'react'
import ReactDom from 'react-dom'
import './css/modal-style.css'
import EmailForm from '../Email/EmailForm'


export default function WelcomeModal({ open }) {
    if (!open) return null






    return ReactDom.createPortal(

        <>
            <div className='modal-overlay' />
            <div className='modal-container'>
                     
        
            <EmailForm />
            Hello
            </div>
        </>,
        document.getElementById('portal')
    )
}
