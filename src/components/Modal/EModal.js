import React from 'react'
import ReactDom from 'react-dom'
import './css/modal-style.css'
import EmailForm from '../Email/EmailForm'


export default function WelcomeModal({ open, onClose }) {
    if (!open) return null






    return ReactDom.createPortal(

        <>
            <div className='modal-overlay' />
            <div className='modal-container'>
                <button className='close-button' onClick={onClose}>X</button>                    
        
            <EmailForm />
            
            </div>
        </>,
        document.getElementById('portal')
    )
}
