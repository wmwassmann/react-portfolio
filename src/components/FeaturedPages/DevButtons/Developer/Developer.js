
import React, { Component } from 'react'
import './../../css/style.css'
// import DevData from './../../DevProfiles/DevData'


export default class Developer extends Component {

    constructor(props) {
        super(props);

        localStorage.setItem('devSelected', '')
        localStorage.setItem('anySelected', 'false')
        this.state = {
            anySelected: false,
            isToggleOnDavid: false,
            isToggleOnAlex: false,
            isToggleOnRicky: false,
            isToggleOnKarl: false,
        }
    }

    handle_selected = (e) => {

        e.preventDefault()
        // const developerName = (this.props.name)
        const developerInLocal = localStorage.getItem('devSelected')
        const anySelected = localStorage.getItem('anySelected')


        if (anySelected === 'true') {



            const developerReturn = document.getElementById(`${developerInLocal}-button`)

            const closeText = document.getElementById('dev-text-content')
            const vanish = document.getElementById(`${developerInLocal}-selected-container`)
            const removeMask = document.getElementById(`${developerInLocal}-dev-pure-text`)



            vanish.classList.remove(`${developerInLocal}-reveal-text`)
            removeMask.classList.remove(`${developerInLocal}-slide-mask`)
            closeText.classList.remove('unwrap')

            closeText.classList.add('wrap')
            vanish.classList.add(`${developerInLocal}-hide-text`)
            developerReturn.classList.add('fade-out')

            setTimeout(() => {

                // const buttonLinks = document.querySelector('.button-links')
                
                // buttonLinks.classList.remove('button-linkedin')
                // buttonLinks.classList.remove('button-github')

                const removeButtonLinks = document.getElementById('button-id')
                removeButtonLinks.remove()

                localStorage.setItem('devSelected', '')




                developerReturn.classList.add(`${developerInLocal}-return`)
                developerReturn.classList.remove(`${developerInLocal}-push-left`)
                closeText.classList.remove('wrap')


            }, 500)

            setTimeout(() => {
                developerReturn.classList.add('fade-in')
                developerReturn.classList.remove('fade-out')
                setTimeout(() => {
                    developerReturn.classList.remove('fade-in')
                    developerReturn.classList.remove(`${developerInLocal}-return`)
                    developerReturn.classList.remove(`${developerInLocal}-button`)
                }, 100)
            }, 1000)

            this.push_selected()


            return;

        } else if (anySelected === 'false') {
            this.push_selected()
        }

        this.props.selected_developer(this.props.name)
    }


    push_selected = () => {

        const developerGithub = (this.props.github)
        const developerLinkedIn = (this.props.linkedin)
        const developerTag = (this.props.tag)

        this.setState({ anySelected: true })

        const sendDev = document.getElementById(`${developerTag}-button`)
        sendDev.classList.add(`${developerTag}-button`)



        setTimeout(() => {
            localStorage.setItem('anySelected', 'true')
            localStorage.setItem('devSelected', (developerTag))



            const developerInLocal = localStorage.getItem('devSelected')
            const phaseShift = document.getElementById(`${developerTag}-name`)
            const textMain = document.getElementById('dev-text-content')
            const pushLeft = document.getElementById(`${developerTag}-button`)
            const textReveal = document.getElementById(`${developerTag}-selected-container`)
            const slideMask = document.getElementById(`${developerTag}-dev-pure-text`)

            const buttonContainer = document.createElement('div')
            const linkedInBtn = document.createElement('button')
            const githubBtn = document.createElement('button')


            // phaseShift.innerHTML = ''
            buttonContainer.id = ('button-id')
            linkedInBtn.classList.add('button-linkedin')
            githubBtn.classList.add('button-github')

            buttonContainer.classList.add('button-container')
            linkedInBtn.classList.add('button-links')
            githubBtn.classList.add('button-links')
            pushLeft.classList.add(`${developerTag}-push-left`)
            textMain.classList.add('unwrap')
            slideMask.classList.add(`${developerInLocal}-slide-mask`)

            textReveal.classList.add(`${developerTag}-reveal-text`)
            textReveal.classList.remove(`${developerInLocal}-hide-text`)

            linkedInBtn.addEventListener('click', function () {
                window.location = developerLinkedIn
            })

            githubBtn.addEventListener('click', function () {
                window.location = developerGithub
            })
       

            phaseShift.append(
                buttonContainer
            )

            buttonContainer.append(
                linkedInBtn,
                githubBtn
            )
        }, 900)
    }

    render() {
        const developerName = (this.props.name)
        const developerSource = (this.props.source)
        const developerTag = (this.props.tag)

        return (
            <div className='dev-container'>
                <div className={developerTag}>

                    <button className='button dev-button border-pop' id={`${developerTag}-button`} onClick={this.handle_selected}>
                        <img src={developerSource} className="dev-image" id={`${developerTag}-img`} alt='personalimage'></img>
                        <div className='developer-name' id={`${developerTag}-name`}>
                            {developerName}
                        </div>
                    </button>


                </div>
                <div className={`${developerTag}-dev-pure-text`} id={`${developerTag}-dev-pure-text`}>
                    <div className={`${developerTag}-hide-text selected-container`} id={`${developerTag}-selected-container`}>
                        <p2>
                        {this.props.bio}
                        </p2>
                    </div>
                </div>
            </div>
        )
    }
}


