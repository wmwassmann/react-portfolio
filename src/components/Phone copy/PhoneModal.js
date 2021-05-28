import React, { useState } from 'react'
import { FaPhone } from "react-icons/fa";
import Modal from '../Modal/EModal'
import './css/style.css'


export default function EmailModal() {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className='landing-container'>


            <div className='welcome-modal'>


                <button className='contact-icon' onClick={() => setIsOpen(true)}>
                    <FaPhone/>
                </button>
                
                <Modal
                    open={isOpen}
                    onClose={() => setIsOpen(false)}>

                </ Modal>

            </div>

        </div>
    )
}