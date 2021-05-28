import React from 'react'
import ReactDom from 'react-dom'
import './css/modal-style.css'
import { Typography } from '@material-ui/core';
import Typed from "react-typed";



export default function WelcomeModal({ open, children }) {
    if (!open) return null






    return ReactDom.createPortal(

        <>
            <div className='modal-overlay' />
            <div className='modal-container-phone'>
                     
        
            <div className='phone'>
            <Typography variant="h2">
              <Typed strings={["253-792-1330<"]} typeSpeed={30} />
          </Typography>
          </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
