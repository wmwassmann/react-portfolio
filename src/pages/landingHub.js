import React from 'react'
import { Typography } from '@material-ui/core';
import Typed from "react-typed";
import './css/style.css'

export default function landingHub() {


 
    
    return (
        
        <div className='typed-intro'>
            <Typography variant="h2">
              <Typed strings={["Hello, and welcome to my playground!"]} typeSpeed={40} />
          </Typography>
        </div>
    )
}
