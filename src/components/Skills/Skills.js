import React, { useState } from 'react'
import './css/skills-style.css'

const Skills = () => {

   

    const handle_skills = () => {
      
  
    }




    return (
        <div className='button-container'>
            <button className='skills-button' id='languages' onClick={handle_skills}>       
                Languages         
            </button>
            <button className='skills-button' id='framework' onClick={handle_skills}>                
                Frameworks
            </button>
            <button className='skills-button' id='databases' onClick={handle_skills}>      
                Databases          
            </button>
            <button className='skills-button' id='dev-tools' onClick={handle_skills}>     
                Development Tools           
            </button>
            
        </div>
    )
}

export default Skills
