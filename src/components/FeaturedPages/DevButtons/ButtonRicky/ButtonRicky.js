import React from 'react'
import DevData from '../../DevProfiles/DevData';
import ricky from './../img/Ricky.jpg'
import '../../css/style.css'

export class ButtonRicky extends React.Component {

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

    handleRicky = (e) => {

        if (localStorage.getItem('anyDev') === 'Yes')  {


            // SELECTOR CONDITIONAL  ==============================================================================================================================

            if (localStorage.getItem('devSelected') === 'David') {
                const returnBtn = document.getElementById('david-button')
                const resetBtn = document.getElementById('david-name')
                const closeText = document.getElementById('dev-text-content')
                const vanish = document.getElementById('selected-container-david')
                const removeMask = document.getElementById('dev-pure-text-ricky')
                vanish.classList.add('hide-text')
                vanish.classList.remove('reveal-text')
                removeMask.classList.remove('slide-mask');
                closeText.classList.remove('unwrap')
                closeText.classList.add('wrap')
                returnBtn.classList.add('fade-out')

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

                const returnBtn = document.getElementById('alex-button')
                const resetBtn = document.getElementById('alex-name')
                const closeText = document.getElementById('dev-text-content')
                const vanish = document.getElementById('selected-container-alex')
                const removeMask = document.getElementById('dev-pure-text-ricky')
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
                const returnBtn = document.getElementById('ricky-button')
                returnBtn.classList.add('ricky-return')

                this.setState({
                    isToggleOnRicky: false
                })


            } else if (localStorage.getItem('devSelected') === 'Karl') {

                const returnBtn = document.getElementById('karl-button')
                const resetBtn = document.getElementById('karl-name')
                const closeText = document.getElementById('dev-text-content')
                const vanish = document.getElementById('selected-container-karl')
                const removeMask = document.getElementById('dev-pure-text-ricky')
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

            const handleBtn = document.getElementById('ricky-button')
            handleBtn.classList.add('ricky-button')
            handleBtn.classList.remove('ricky-return')

            this.setState({
                isToggleOnAny: true,
                isToggleOnRicky: true

            })
            localStorage.setItem('anyDev', 'Yes')        
            localStorage.setItem('devSelected', 'Ricky')
            setTimeout(() => {

              
                e.preventDefault()
                localStorage.setItem('anyDev', 'Yes')
                localStorage.setItem('devSelected', 'Ricky')

                const phaseShift = document.getElementById('ricky-name')
                const textMain = document.getElementById('dev-text-content')
                const pushLeft = document.getElementById('ricky-button')
                const textReveal = document.getElementById('selected-container-ricky')
                const slideMask = document.getElementById('dev-pure-text-ricky')

                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')


                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')
                pushLeft.classList.add('push-left-ricky')
                textMain.classList.add('unwrap')
                slideMask.classList.add('slide-mask')

                textReveal.classList.add('reveal-text')
                textReveal.classList.remove('hide-text')

                linkedInBtn.addEventListener('click', function () {
                    window.location = 'https://www.linkedin.com/in/ricky-fuk/'
                })

                githubBtn.addEventListener('click', function () {
                    window.location = 'https://github.com/rickyfuk'
                })

                phaseShift.append(
                    buttonContainer
                )

                buttonContainer.append(
                    linkedInBtn,
                    githubBtn
                )

            }, 700)
            return;

        } else if (localStorage.getItem('anyDev') === 'No') {

            const handleBtn = document.getElementById('ricky-button')
            handleBtn.classList.add('ricky-button')
            handleBtn.classList.remove('ricky-return')


            this.setState({
                isToggleOnAny: true,
                isToggleOnRicky: true

            })
            localStorage.setItem('anyDev', 'Yes')
            localStorage.setItem('devSelected', 'Ricky')
            setTimeout(() => {

             
                e.preventDefault()
                localStorage.setItem('anyDev', 'Yes')
                localStorage.setItem('devSelected', 'Ricky')


                const phaseShift = document.getElementById('ricky-name')
                const textMain = document.getElementById('dev-text-content')
                const pushLeft = document.getElementById('ricky-button')
                const textReveal = document.getElementById('selected-container-ricky')
                const slideMask = document.getElementById('dev-pure-text-ricky')

                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')



                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')
                pushLeft.classList.add('push-left-ricky')
                textMain.classList.add('unwrap')
                slideMask.classList.add('slide-mask')

                textReveal.classList.add('reveal-text')
                textReveal.classList.remove('hide-text')


                linkedInBtn.addEventListener('click', function () {
                    window.location = 'https://www.linkedin.com/in/ricky-fuk/'
                })

                githubBtn.addEventListener('click', function () {
                    window.location = 'https://github.com/rickyfuk'
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
            <div id='ricky-container'>
                <div className='ricky' id='ricky'>
                    <button className='button dev-button border-pop' id='ricky-button' onClick={this.handleRicky}>
                        <img src={ricky} className="dev-image" id='ricky-img' alt='personalimage'></img>
                        <p id='ricky-name'>CHUNG HEI FUK</p>
                    </button>
                </div>
                <div className='dev-pure-text-ricky' id='dev-pure-text-ricky'>
                    <DevData />
                </div>
            </div>
        )
    }
}

export default ButtonRicky
