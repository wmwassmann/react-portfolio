import React from 'react'
import alex from './img/Alex.jpg'
import DevData from '../DevProfiles/DevData'
import '../css/style.css'


export class ButtonAlex extends React.Component {


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

    


    handleAlex = (e) => {
      
       
        if (localStorage.getItem('anyDev') === 'Yes')  {
            
            // SELECTOR CONDITIONAL  ==============================================================================================================================

            if (localStorage.getItem('devSelected') === 'David')  { 
                localStorage.setItem('devSelected', '')
                const returnBtn = document.getElementById('david-button')
                const resetBtn = document.getElementById('david-name')
                const closeText = document.getElementById('dev-text-content')
                const vanish = document.getElementById('selected-container-david')
                const removeMask = document.getElementById('dev-pure-text-alex')

                vanish.classList.remove('reveal-text')                
                removeMask.classList.remove('slide-mask')
                closeText.classList.remove('unwrap')

                closeText.classList.add('wrap')
                returnBtn.classList.add('fade-out')
                vanish.classList.add('hide-text')

                setTimeout(() => {

                    resetBtn.innerHTML = 'David Deaton'
                    returnBtn.classList.add('david-return')
                    returnBtn.classList.remove('push-left-david')
                    closeText.classList.remove('wrap')

                    this.setState({
                        isToggleOnDavid: false
                    })

                }, 500)

                setTimeout(() => {
                    returnBtn.classList.add('fade-in')
                    returnBtn.classList.remove('fade-out')
                    setTimeout(() => {
                        returnBtn.classList.remove('fade-in')
                    }, 100)
                }, 800)
 
            } else if (localStorage.getItem('devSelected') === 'Alex') {
                                 
                localStorage.setItem('devSelected', '')
                const returnBtn = document.getElementById('alex-button')
                returnBtn.classList.add('alex-button')
                returnBtn.classList.remove('alex-return')

                this.setState({
                    isToggleOnAlex: false
                })

            } else if (localStorage.getItem('devSelected') === 'Ricky') {


                localStorage.setItem('devSelected', '')
                const returnBtn = document.getElementById('ricky-button')
                const resetBtn = document.getElementById('ricky-name')
                const closeText = document.getElementById('dev-text-content')
                const vanish = document.getElementById('selected-container-ricky')
                const removeMask = document.getElementById('dev-pure-text-alex')
               
                vanish.classList.remove('reveal-text')
                removeMask.classList.remove('slide-mask');
                closeText.classList.remove('unwrap')

                closeText.classList.add('wrap')
                returnBtn.classList.add('fade-out')
                vanish.classList.add('hide-text')

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
                const removeMask = document.getElementById('dev-pure-text-alex')

                vanish.classList.remove('reveal-text')
                removeMask.classList.remove('slide-mask');
                closeText.classList.remove('unwrap')

                vanish.classList.add('hide-text')
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

            const handleBtn = document.getElementById('alex-button')
            handleBtn.classList.add('alex-button')
            handleBtn.classList.remove('alex-return')

            this.setState({
                isToggleOnAny: true,
                isToggleOnAlex: true


            })
            localStorage.setItem('anyDev', 'Yes')
            localStorage.setItem('devSelected', 'Alex')
            setTimeout(() => {
              
                e.preventDefault()
                localStorage.setItem('devSelected', 'Alex')

                const phaseShift = document.getElementById('alex-name')
                const textMain = document.getElementById('dev-text-content')
                const pushLeft = document.getElementById('alex-button')
                const textReveal = document.getElementById('selected-container-alex')
                const slideMask = document.getElementById('dev-pure-text-alex')

                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')



                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')
                pushLeft.classList.add('push-left-alex')
                textMain.classList.add('unwrap')
                slideMask.classList.add('slide-mask')

                textReveal.classList.add('reveal-text')
                textReveal.classList.remove('hide-text')


                linkedInBtn.addEventListener('click', function () {
                    window.location = 'https://www.linkedin.com/in/alex-madrigal-b5b8461a9/'
                })

                githubBtn.addEventListener('click', function () {
                    window.location = 'https://github.com/jam-madrigal'
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

            const handleBtn = document.getElementById('alex-button')
            handleBtn.classList.add('alex-button')

            this.setState({
                isToggleOnAny: true,
                isToggleOnAlex: true


            })
            localStorage.setItem('anyDev', 'Yes')
            localStorage.setItem('devSelected', 'Alex')
            setTimeout(() => {
            
                e.preventDefault()
                localStorage.setItem('devSelected', 'Alex')

                const phaseShift = document.getElementById('alex-name')
                const textMain = document.getElementById('dev-text-content')
                const pushLeft = document.getElementById('alex-button')
                const textReveal = document.getElementById('selected-container-alex')
                const slideMask = document.getElementById('dev-pure-text-alex')

                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')



                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')
                pushLeft.classList.add('push-left-alex')
                textMain.classList.add('unwrap')
                slideMask.classList.add('slide-mask')

                textReveal.classList.add('reveal-text')
                textReveal.classList.remove('hide-text')


                linkedInBtn.addEventListener('click', function () {
                    window.location = 'https://www.linkedin.com/in/alex-madrigal-b5b8461a9/'
                })

                githubBtn.addEventListener('click', function () {
                    window.location = 'https://github.com/jam-madrigal'
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
            <div id='alex-container'>
                <div className='alex' id='alex'>
                    <button className='button dev-button' id='alex-button' onClick={this.handleAlex}>
                        <img src={alex} className="dev-image" id='alex-img' alt='personalimage'></img>
                        <p id='alex-name'>Alex Madrigal</p>
                    </button>
                </div>
               
                <div className='dev-pure-text-alex' id='dev-pure-text-alex'>
                    <DevData />
                </div>
            </div>

        )
    }
}

export default ButtonAlex
