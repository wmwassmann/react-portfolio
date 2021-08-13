import { set } from 'local-storage'
import React, { useState, useEffect } from 'react'
import './css/skills-style.css'

const Skills = (e) => {
    const [skill, setSkill] = useState('')
    // const languages = ['Javascript ', 'HTML ', 'CSS3 ']
    const databases = ['MongoDB ', 'MySQL ']
    const frameworks = ['React ', 'Express ', 'jQuery ', 'NodeJS ', 'Bootstrap ', 'Mongoose ', 'React-Redux ']
    const devTools = ['GitHub ', 'Postman ', 'Git Bash ', 'Heroku ', 'Firebase ', 'MongoDB Atlas ', 'Insomnia ']

    const skillsTree = {
        languages: ['Javascript ', 'HTML ', 'CSS3 ']
    }



    const handle_skills = (e) => {
        let currentSkill = e.target.name
        // console.log(skill)
        const skillStatements = () => {
            if (currentSkill === 'languages') {
                let skill = skillsTree.languages

                console.log(skill)
                setSkill([...skill])

            }
            if (currentSkill === 'database') {
                setSkill(databases)

            }
            if (currentSkill === 'framework') {
                setSkill(frameworks)

            }
            if (currentSkill === 'tools') {
                setSkill(devTools)
            }
        }

        if (skill === '') {
            skillStatements()
        } else {
            setSkill('')
            skillStatements()
        }
    }





    return (
        <div className='skills-comp-cont'>

            <div className='button-container'>
                <button className='skills-button' id='language' name='languages' onClick={handle_skills}>
                    language
                </button>
                <button className='skills-button' id='database' name='database' onClick={handle_skills}>
                    databases
                </button>
                <button className='skills-button' id='framework' name='framework' onClick={handle_skills}>
                    frameworks
                </button>
                <button className='skills-button' id='tools' name='tools' onClick={handle_skills}>
                    developer tools
                </button>
            </div>
            <div className='display-container'>
                {skill}
            </div>


        </div>
    )
}

export default Skills
