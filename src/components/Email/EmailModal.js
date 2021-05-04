import React, { useState } from 'react'
import { FaRegEnvelope } from "react-icons/fa";
import Modal from '../../components/Modal/Modal'
import './css/style.css'


export default function EmailModal() {

    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className='landing-container'>


            <div className='welcome-modal'>


                <button className='contact-icon' onClick={() => setIsOpen(true)}>
                    <FaRegEnvelope />
                </button>



                <Modal
                    open={isOpen}
                    onClose={() => setIsOpen(false)}>

                </ Modal>

            </div>

        </div>
    )
}