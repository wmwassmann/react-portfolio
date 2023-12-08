import React from 'react'
import ReactDom from 'react-dom'
import './css/modal-style.css'



export default function WelcomeModal({ open, children, onClose }) {
    if (!open) return null






    return ReactDom.createPortal(

        <>
            <div className='modal-overlay' />
            <div className='modal-container-phone'>
                     
            <button className='close-button' onClick={onClose}>X</button>
            <div className='phone'>
                253-792-1330        
          </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
