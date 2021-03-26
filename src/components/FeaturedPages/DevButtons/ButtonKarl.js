import React from 'react'
import DevData from '../DevProfiles/DevData';
import karl from './img/Karl.jpg'
import '../css/style.css'

export class ButtonKarl extends React.Component {

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


    handleKarl = (e) => {

        if (localStorage.getItem('anyDev') === 'Yes')  {

            // SELECTOR CONDITIONAL  ==============================================================================================================================

            if (localStorage.getItem('devSelected') === 'David') {
                localStorage.setItem('devSelected', '')
                const returnBtn = document.getElementById('david-button')
                const resetBtn = document.getElementById('david-name')
                const closeText = document.getElementById('dev-text-content')
                const vanish = document.getElementById('selected-container-david')
                const removeMask = document.getElementById('dev-pure-text-karl')
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
                localStorage.setItem('devSelected', '')
                const returnBtn = document.getElementById('alex-button')
                const resetBtn = document.getElementById('alex-name')
                const closeText = document.getElementById('dev-text-content')
                const vanish = document.getElementById('selected-container-alex')
                const removeMask = document.getElementById('dev-pure-text-karl')
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
                const removeMask = document.getElementById('dev-pure-text-karl')
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

                const returnBtn = document.getElementById('karl-button')
                returnBtn.classList.add('karl-return')

                this.setState({
                    isToggleOnKarl: false
                })


            }

            // SELECTOR CONDITIONAL END ==============================================================================================================================

            const handleBtn = document.getElementById('karl-button')
            handleBtn.classList.add('karl-button')
            handleBtn.classList.remove('karl-return')

            this.setState({
                isToggleOnAny: true,
                isToggleOnKarl: true

            })
            localStorage.setItem('devSelected', 'Karl')
            setTimeout(() => {

        
                e.preventDefault()
                localStorage.setItem('anyDev', 'Yes')
                localStorage.setItem('devSelected', 'Karl')


                const phaseShift = document.getElementById('karl-name')
                const pushLeft = document.getElementById('karl-button')
                const textMain = document.getElementById('dev-text-content')
                const textReveal = document.getElementById('selected-container-karl')
                const slideMask = document.getElementById('dev-pure-text-karl')


                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')


                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')
                pushLeft.classList.add('push-left-karl')
                textMain.classList.add('unwrap')
                slideMask.classList.add('slide-mask')

                textReveal.classList.add('reveal-text')
                textReveal.classList.remove('hide-text')


                linkedInBtn.addEventListener('click', function () {
                    window.location = 'https://www.linkedin.com/in/karl-e-behrens/'
                })

                githubBtn.addEventListener('click', function () {
                    window.location = 'https://github.com/behrenskarl'
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

        } else if (localStorage.getItem('anyDev') === 'No')  {

            const handleBtn = document.getElementById('karl-button')
            handleBtn.classList.add('karl-button')
            handleBtn.classList.remove('karl-return')


            this.setState({
                isToggleOnAny: true,
                isToggleOnKarl: true,

            })
            localStorage.setItem('anyDev', 'Yes')
            localStorage.setItem('devSelected', 'Karl')
            setTimeout(() => {

           
                e.preventDefault()
                localStorage.setItem('devSelected', 'Karl')


                const phaseShift = document.getElementById('karl-name')
                const pushLeft = document.getElementById('karl-button')
                const textMain = document.getElementById('dev-text-content')
                const textReveal = document.getElementById('selected-container-karl')
                const slideMask = document.getElementById('dev-pure-text-karl')

                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')

                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')
                pushLeft.classList.add('push-left-karl')
                textMain.classList.add('unwrap')
                slideMask.classList.add('slide-mask')

                textReveal.classList.add('reveal-text')
                textReveal.classList.remove('hide-text')


                linkedInBtn.addEventListener('click', function () {
                    window.location = 'https://www.linkedin.com/in/karl-e-behrens/'
                })

                githubBtn.addEventListener('click', function () {
                    window.location = 'https://github.com/behrenskarl'
                })


                phaseShift.append(
                    buttonContainer,

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
            <div id='karl-container'>
                <div className='karl' id='karl'>
                    <button className='button dev-button' id='karl-button' onClick={this.handleKarl}>
                        <img src={karl} className="dev-image" id='karl-img' alt='personalimage'></img>
                        <p id='karl-name'>KARL BEHRENS</p>
                    </button>
                </div>
                <div className='dev-pure-text-karl' id='dev-pure-text-karl'>
                    <DevData />
                </div>

            </div>

        )
    }
}

export default ButtonKarl
