
import React, { useState, useEffect } from 'react'
import './css/skills-style.css'

const Skills = (e) => {
    const [skill, setSkill] = useState('')
  

    const skillsTree = {
        languages: {
            skillOne: 'Javascript',
            skillTwo: 'HTML',
            skillThree: 'CSS3'
          
        },
        databases: {
            skillOne: 'MongoDB',
            skillTwo: 'MySQL'
        },
        frameworks: {
            skillOne: 'React',
            skillTwo: 'Express',
            skillThree: 'jQuery',
            skillFour: 'NodeJS',
            skillFive: 'Bootstrap',
            skillSix: 'Mongoose',
            skillSeven: 'React-Redux'
        },
        tools: {
            skillOne: 'GitHub',
            skillTwo: 'Postman',
            skillThree: 'Git Bash',
            skillFour: 'Heroku',
            skillFive: 'Firebase',
            skillSix: 'MongoDB Atlas',
            skillSeven: 'Insomnia'
        }
}



    const handle_skills = (e) => {
        let currentSkill = e.target.name
        // console.log(skill)
        const skillStatements = (skill) => {
            if (currentSkill === 'languages') {
            console.log(skillsTree[skill])
            setSkill(skillsTree[skill])
            
      
         
            }
            if (currentSkill === 'database') {
               

            }
            if (currentSkill === 'framework') {
             
            }
            if (currentSkill === 'tools') {
                
            }
        }

        if (skill === '') {
            skillStatements(currentSkill)
        } else {
            setSkill('')
            skillStatements(currentSkill)
        }
        
    }




    return (
        <div className='skills-comp-cont'>

            <div className='button-container'>
                <button className='skills-button' id='language' name='languages' onClick={handle_skills}>
                    language
                </button>
                <button className='skills-button' id='database' name='databases' onClick={handle_skills}>
                    databases
                </button>
                <button className='skills-button' id='framework' name='frameworks' onClick={handle_skills}>
                    frameworks
                </button>
                <button className='skills-button' id='tools' name='tools' onClick={handle_skills}>
                    developer tools
                </button>
            </div>
            <div className='display-container'>
                
            </div>


        </div>
    )
}

export default Skills
