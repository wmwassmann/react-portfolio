import React, { Component } from 'react'
import './../../css/style.css'
// import DevData from './../../DevProfiles/DevData'


export default class Developer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            anySelected: false

        }
    }




    handle_selected = (e) => {
        e.preventDefault()

        if (localStorage.getItem('devSelected') !== (this.props.name)) {
            console.log('devSelected Local Storage does not equal', (this.props.name))
            this.setState({ anySelected: false })
        }

        if (this.state.anySelected === true) {
            this.setState({ anySelected: false })
            console.log('any selected = false')
        }

        setTimeout(() => {
            localStorage.setItem('devSelected', (this.props.name))
            this.setState({ anySelected: true })
            console.log('devSelected Local Storage', (this.props.name))
            console.log('any selected = true')

            const sendDev = document.getElementById(`${this.props.tag}-button`)
            sendDev.classList.add(`${this.props.tag}-button`)

        }, 500)

        setTimeout(() => {
            const phaseShift = document.getElementById(`${this.props.tag}-name`)
            const textMain = document.getElementById('dev-text-content')
            const pushLeft = document.getElementById(`${this.props.tag}-button`)
            const textReveal = document.getElementById(`${this.props.tag}-selected-container`)
            const slideMask = document.getElementById(`${this.props.tag}-dev-pure-text`)

            const buttonContainer = document.createElement('div')
            const linkedInBtn = document.createElement('button')
            const githubBtn = document.createElement('button')


            phaseShift.innerHTML = ''
            linkedInBtn.id = 'button-linkedin'
            githubBtn.id = 'button-github'

            buttonContainer.classList.add('button-container')
            linkedInBtn.classList.add('button-links')
            githubBtn.classList.add('button-links')
            pushLeft.classList.add(`${this.props.tag}-push-left`)
            textMain.classList.add('unwrap')
            slideMask.classList.add('slide-mask')

            textReveal.classList.add(`${this.props.tag}-reveal-text`)
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
        }, 1000)


        this.props.selected_developer(this.props.name)
    }

    render() {
        return (
            <div className='dev-container'>
                <div className={this.props.tag}>
                    <button className='button dev-button border-pop' id={`${this.props.tag}-button`} onClick={this.handle_selected}>
                        <img src={this.props.source} className="dev-image" id={`${this.props.tag}-img`} alt='personalimage'></img>
                        <div id={`${this.props.tag}-name`}>
                            {this.props.name}
                        </div>
                    </button>
                </div>
                <div className={`${this.props.tag}-dev-pure-text`} id={`${this.props.tag}-dev-pure-text`}>
                    <div className='selected-container hide-text' id={`${this.props.tag}-selected-container`}>

                    </div>                
                </div>
            </div>
        )
    }
}


