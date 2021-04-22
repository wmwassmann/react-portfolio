import React from 'react'
import Modal from 'react-modal'
import Email from './Email'
import './css/style.css'

export default function app() {





    return (
        <div className='email-container'>
            <Modal>
                <Email/>           
            </Modal>
            
        </div>
    )
}
