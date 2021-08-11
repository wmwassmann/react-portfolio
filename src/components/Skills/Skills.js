import React, { useState, useEffect } from 'react'
import './css/skills-style.css'

const Skills = () => {

    const[skill, setSkill] = useState({ currentSkill: '' })

    const handle_skills = (e) => {
        setSkill(e.target.name)
    }

    useEffect(() => {
        console.log(skill)
    
    }, [skill])



    return (
        <div className='button-container'>
            <button className='skills-button' id='languages' name='languages' onClick={handle_skills}>       
                Languages         
            </button>
            <button className='skills-button' id='framework' name='framework' onClick={handle_skills}>                
                Frameworks
            </button>
            <button className='skills-button' id='databases' name='databases' onClick={handle_skills}>      
                Databases          
            </button>
            <button className='skills-button' id='dev-tools' name='dev-tools' onClick={handle_skills}>     
                Development Tools           
            </button>
            
        </div>
    )
}

export default Skills
