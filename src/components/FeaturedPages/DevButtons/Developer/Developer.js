import React, { Component } from 'react'
import './../../css/style.css'
// import DevData from './../../DevProfiles/DevData'


export default class Developer extends Component {

    constructor(props) {
        super(props);
        
        localStorage.setItem('devSelected', '')
        localStorage.setItem('anySelected', 'false')
        this.state = {
            anySelected: false

        }
    }




    push_selected = () => {
        const developerTag = (this.props.tag)        
        localStorage.setItem('anySelected', 'true')

        setTimeout(() => {        
     
            setTimeout(() => {
                localStorage.setItem('devSelected', (developerTag))
                this.setState({ anySelected: true })         
                const sendDev = document.getElementById(`${developerTag}-button`)
                sendDev.classList.add(`${developerTag}-button`)

            }, 500)

        }, 1000)

        setTimeout(() => {
            const phaseShift = document.getElementById(`${developerTag}-name`)
            const textMain = document.getElementById('dev-text-content')
            const pushLeft = document.getElementById(`${developerTag}-button`)
            const textReveal = document.getElementById(`${developerTag}-selected-container`)
            const slideMask = document.getElementById(`${developerTag}-dev-pure-text`)

            const buttonContainer = document.createElement('div')
            const linkedInBtn = document.createElement('button')
            const githubBtn = document.createElement('button')


            phaseShift.innerHTML = ''
            linkedInBtn.id = 'button-linkedin'
            githubBtn.id = 'button-github'

            buttonContainer.classList.add('button-container')
            linkedInBtn.classList.add('button-links')
            githubBtn.classList.add('button-links')
            pushLeft.classList.add(`${developerTag}-push-left`)
            textMain.classList.add('unwrap')
            slideMask.classList.add('slide-mask')

            textReveal.classList.add(`${developerTag}-reveal-text`)
            textReveal.classList.remove('hide-text')


            linkedInBtn.addEventListener('click', function () {
                window.location = 'https://www.linkedin.com/in/david-v-deaton/'
            })

            githubBtn.addEventListener('click', function () {
                window.location = 'https://github.com/DavidVDeaton'
            })

            phaseShift.append(
                buttonContainer
            )

            buttonContainer.append(
                linkedInBtn,
                githubBtn
            )
        }, 1500)

    } 





    handle_selected = (e) => {
        e.preventDefault()
        const developerName = (this.props.name)
        const developerTag = (this.props.tag)
        const developerInLocal = localStorage.getItem('devSelected')
        const anySelected = localStorage.getItem('anySelected')

        if (anySelected === 'true') {
            localStorage.setItem('devSelected', '')
            localStorage.setItem('anySelected', 'true')            
            console.log(developerInLocal)
            console.log('finish')
            
            const developerReturn = document.getElementById(`${developerInLocal}-button`)
            const resetBtn = document.getElementById(`${developerInLocal}-name`)
            const closeText = document.getElementById('dev-text-content')
            const vanish = document.getElementById(`${developerInLocal}-selected-container`)
            const removeMask = document.getElementById(`${developerInLocal}-dev-pure-text`)



            vanish.classList.remove('reveal-text')                
            removeMask.classList.remove('slide-mask')
            closeText.classList.remove('unwrap')

            closeText.classList.add('wrap')        
            vanish.classList.add('hide-text')
            developerReturn.classList.add('fade-out')

            setTimeout(() => {

                resetBtn.innerHTML = developerName
                developerReturn.classList.add(`${developerInLocal}-return`)
                developerReturn.classList.remove(`${developerInLocal}-push-left`)
                closeText.classList.remove('wrap')

                this.setState({
                    isToggleOnDavid: false
                })

            }, 500)

            setTimeout(() => {
                developerReturn.classList.add('fade-in')
                developerReturn.classList.remove('fade-out')
                setTimeout(() => {
                    developerReturn.classList.remove('fade-in')
                }, 100)
            }, 800)
            this.push_selected()
        return;  

    } else if (anySelected === 'false')  {
        this.push_selected()
    }



        this.props.selected_developer(this.props.name)
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
                        <div id={`${developerTag}-name`}>
                            {developerName}
                        </div>
                    </button>
                </div>
                <div className={`${developerTag}-dev-pure-text`} id={`${developerTag}-dev-pure-text`}>
                    <div className='selected-container hide-text' id={`${developerTag}-selected-container`}>

                    </div>
                </div>
            </div>
        )
    }
}


