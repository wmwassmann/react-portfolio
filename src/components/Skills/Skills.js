
import React, { useState } from 'react'
import './css/skills-style.css'

const Skills = (e) => {
    const [skill, setSkill] = useState('')


    const skillsTree = {
        languages: {
            skillThree: 'Javascript',
            skillFour: 'HTML',
            skillFive: 'CSS3'

        },
        databases: {
            skillThree: 'MongoDB',
            skillFive: 'MySQL'
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

        const visibile = document.getElementById('display-container')

        visibile.classList.add('reveal-skills')

        // console.log(skill)
        const skillStatements = (skill) => {
            if (currentSkill === 'languages') {
                console.log(skillsTree[skill])
                setSkill(skillsTree[skill])

            }
            if (currentSkill === 'databases') {
                setSkill(skillsTree[skill])
                console.log(skillsTree[skill])
            }
            if (currentSkill === 'frameworks') {
                setSkill(skillsTree[skill])
                console.log(skillsTree[skill])
            }
            if (currentSkill === 'tools') {
                setSkill(skillsTree[skill])
                console.log(skillsTree[skill])
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
                    Languages
                </button>
                <button className='skills-button' id='database' name='databases' onClick={handle_skills}>
                    Databases
                </button>
                <button className='skills-button' id='framework' name='frameworks' onClick={handle_skills}>
                    Frameworks
                </button>
                <button className='skills-button' id='tools' name='tools' onClick={handle_skills}>
                    Developer Tools
                </button>
            </div>
            <div className='display-container' id='display-container'>
                <div>
                    {skill.skillOne}
                </div>
                <div>
                    {skill.skillTwo}
                </div>
                <div>
                    {skill.skillThree}
                </div>
                <div>
                    {skill.skillFour}
                </div>
                <div>
                    {skill.skillFive}
                </div>
                <div>
                    {skill.skillSix}
                </div>
                <div>
                    {skill.skillSeven}
                </div>
            </div>


        </div>
    )
}

export default Skills
