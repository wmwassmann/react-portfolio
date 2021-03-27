import React from 'react'
import david from './img/David.jpg'
import DevData from '../DevProfiles/DevData';

import '../css/style.css'


export class ButtonDavid extends React.Component {

    constructor(props) {
        super(props)
        localStorage.setItem('devSelected', '')
        localStorage.setItem('anyDev', 'No')
        this.state = {
           
            isToggleOnAny: false,
            isToggleOnDavid: false,
            isToggleOnAlex: false,
            isToggleOnRicky: false,
            isToggleOnKarl: false

        }

    }
   



    handleDavid = (e) => {             
      
        if (localStorage.getItem('anyDev') === 'Yes') {

            // SELECTOR CONDITIONAL  ==============================================================================================================================

            if (localStorage.getItem('devSelected') === 'David') {
                localStorage.setItem('devSelected', '')
                const returnBtn = document.getElementById('david-button')
                returnBtn.classList.add('david-return')

                this.setState({
                    isToggleOnDavid: false
                })

            } else if (localStorage.getItem('devSelected') === 'Alex') {
                localStorage.setItem('devSelected', '')
                const returnBtn = document.getElementById('alex-button')
                const resetBtn = document.getElementById('alex-name')
                const closeText = document.getElementById('dev-text-content')
                const vanish = document.getElementById('selected-container-alex')
                const removeMask = document.getElementById('dev-pure-text-david')
                vanish.classList.add('hide-text')
                vanish.classList.remove('reveal-text')
                removeMask.classList.remove('slide-mask');
                closeText.classList.remove('unwrap')
                closeText.classList.add('wrap')
                returnBtn.classList.add('fade-out')

                setTimeout(() => {

                    resetBtn.innerHTML = 'Alex Madrigal'
                    returnBtn.classList.add('alex-return')
                    returnBtn.classList.remove('push-left-alex')
                    closeText.classList.remove('wrap')

                    this.setState({
                        isToggleOnAlex: false
                    })
                }, 500)

                setTimeout(() => {
                    returnBtn.classList.add('fade-in')
                    returnBtn.classList.remove('fade-out')
                    setTimeout(() => {
                        returnBtn.classList.remove('fade-in')
                    }, 100)
                }, 800)
                

            } else if (localStorage.getItem('devSelected') === 'Ricky') {
                localStorage.setItem('devSelected', '')
                const returnBtn = document.getElementById('ricky-button')
                const resetBtn = document.getElementById('ricky-name')
                const closeText = document.getElementById('dev-text-content')
                const vanish = document.getElementById('selected-container-ricky')
                const removeMask = document.getElementById('dev-pure-text-david')
                vanish.classList.add('hide-text')
                vanish.classList.remove('reveal-text')
                removeMask.classList.remove('slide-mask');
                closeText.classList.remove('unwrap')
                closeText.classList.add('wrap')
                returnBtn.classList.add('fade-out')

                setTimeout(() => {

                    resetBtn.innerHTML = 'Chung Hei Fuk'
                    returnBtn.classList.add('ricky-return')
                    returnBtn.classList.remove('push-left-ricky')
                    closeText.classList.remove('wrap')

                    this.setState({
                        isToggleOnRicky: false
                    })
                }, 500)

                setTimeout(() => {
                    returnBtn.classList.add('fade-in')
                    returnBtn.classList.remove('fade-out')
                    setTimeout(() => {
                        returnBtn.classList.remove('fade-in')
                    }, 100)
                }, 800)


            } else if (localStorage.getItem('devSelected') === 'Karl') {
                localStorage.setItem('devSelected', '')

                const returnBtn = document.getElementById('karl-button')
                const resetBtn = document.getElementById('karl-name')
                const closeText = document.getElementById('dev-text-content')
                const vanish = document.getElementById('selected-container-karl')
                const removeMask = document.getElementById('dev-pure-text-david')
                vanish.classList.add('hide-text')
                vanish.classList.remove('reveal-text')
                removeMask.classList.remove('slide-mask');
                closeText.classList.remove('unwrap')
                closeText.classList.add('wrap')
                returnBtn.classList.add('fade-out')

                setTimeout(() => {

                    resetBtn.innerHTML = 'Karl Behrens'
                    returnBtn.classList.add('karl-return')
                    returnBtn.classList.remove('push-left-karl')
                    closeText.classList.remove('wrap')

                    this.setState({
                        isToggleOnKarl: false
                    })
                }, 500)

                setTimeout(() => {
                    returnBtn.classList.add('fade-in')
                    returnBtn.classList.remove('fade-out')
                    setTimeout(() => {
                        returnBtn.classList.remove('fade-in')
                    }, 100)
                }, 800)


            }

            // SELECTOR CONDITIONAL END ==============================================================================================================================

            const handleBtn = document.getElementById('david-button')
            handleBtn.classList.add('david-button')
            handleBtn.classList.remove('david-return')


            this.setState({
                isToggleOnAny: true,
                isToggleOnDavid: true
            })
            localStorage.setItem('anyDev', 'Yes')           
            localStorage.setItem('devSelected', 'David')

            setTimeout(() => {
                e.preventDefault()
                localStorage.setItem('devSelected', 'David')

                const phaseShift = document.getElementById('david-name')
                const textMain = document.getElementById('dev-text-content')
                const pushLeft = document.getElementById('david-button')
                const textReveal = document.getElementById('selected-container-david')
                const slideMask = document.getElementById('dev-pure-text-david')

                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')


                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')
                pushLeft.classList.add('push-left-david')
                textMain.classList.add('unwrap')
                slideMask.classList.add('slide-mask')

                textReveal.classList.add('reveal-text')
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

            }, 700)


        } else if (localStorage.getItem('anyDev') === 'No') {

            const handleBtn = document.getElementById('david-button')
            handleBtn.classList.add('david-button')

            this.setState({
                isToggleOnAny: true,
                isToggleOnDavid: true
            })
            localStorage.setItem('anyDev', 'Yes')
            localStorage.setItem('devSelected', 'David')

            setTimeout(() => {            
                e.preventDefault()
                localStorage.setItem('devSelected', 'David')

                const phaseShift = document.getElementById('david-name')
                const textMain = document.getElementById('dev-text-content')
                const pushLeft = document.getElementById('david-button')
                const textReveal = document.getElementById('selected-container-david')
                const slideMask = document.getElementById('dev-pure-text-david')

                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')


                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')
                pushLeft.classList.add('push-left-david')
                textMain.classList.add('unwrap')
                slideMask.classList.add('slide-mask')

                textReveal.classList.add('reveal-text')
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

            }, 700)
        }

    }


    render() {
        return (
                <div id='david-container'>               
                    <div className='david' id='david'>
                        <button className='button dev-button border-pop' id='david-button' onClick={this.handleDavid}>
                            <img src={david} className="dev-image" id='david-img' alt='personalimage'></img>
                            <p id='david-name'>DAVID DEATON</p>
                        </button>
                    </div>

                    <div className='dev-pure-text-david' id='dev-pure-text-david'>
                        <DevData />
                    </div>

               
                </div>
           
          

                    
    )
    }
}

export default ButtonDavid