import React from 'react';
import DevData from '../components/FeaturedPages/DevProfiles/DevData';
import { Typography } from '@material-ui/core';
import Typed from "react-typed";
import './css/style.css'
import linkedIn from './img/linkedin.png'
import david from './img/David.jpg'
import alex from './img/Alex.jpg'
import ricky from './img/Ricky.jpg'
import karl from './img/Karl.jpg'






export class DevProfiles extends React.Component {



    constructor(props) {
        super(props)
        localStorage.setItem('devSelected', '')
        this.state = {
            isToggleOnAny: false,
            isToggleOnDavid: false,
            isToggleOnAlex: false,
            isToggleOnRicky: false,
            isToggleOnKarl: false

        }

    }

    //============== DAVID BUTTON ============= DAVID BUTTON ============= DAVID BUTTON ============= DAVID BUTTON ============= DAVID BUTTON ============= DAVID BUTTON ============= 


    handleDavid = (e) => {


        if (this.state.isToggleOnAny === true) {

          // SELECTOR CONDITIONAL  ==============================================================================================================================

          if (this.state.isToggleOnDavid === true) {
            const returnBtn = document.getElementById('david-button')
            returnBtn.classList.add('david-return')

            this.setState({
                isToggleOnDavid: false
            })    

        } else if (this.state.isToggleOnAlex === true) {

            const returnBtn = document.getElementById('alex-button')
            const resetBtn = document.getElementById('alex-name')
            returnBtn.classList.add('fade-out')

            setTimeout(() => {
                
                resetBtn.innerHTML = 'Alex Madrigal'
                returnBtn.classList.add('alex-return')
                returnBtn.classList.remove('push-left-alex')

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
           

        } else if (this.state.isToggleOnRicky === true) {
            const returnBtn = document.getElementById('ricky-button')
            const resetBtn = document.getElementById('ricky-name')
            returnBtn.classList.add('fade-out')

            setTimeout(() => {
                
                resetBtn.innerHTML = 'Chung Hei Fuk'
                returnBtn.classList.add('ricky-return')
                returnBtn.classList.remove('push-left-ricky')

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
           

        } else if (this.state.isToggleOnKarl === true) {

                    
            const returnBtn = document.getElementById('karl-button')
            const resetBtn = document.getElementById('karl-name')
            returnBtn.classList.add('fade-out')

            setTimeout(() => {
                
                resetBtn.innerHTML = 'Karl Behrens'
                returnBtn.classList.add('karl-return')
                returnBtn.classList.remove('push-left-karl')

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


            setTimeout(() => {

                console.log('David')
                e.preventDefault()
                localStorage.setItem('devSelected', 'David')

                const phaseShift = document.getElementById('david-name')
                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')

                const pushLeft = document.getElementById('david-button')

                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')

                pushLeft.classList.add('push-left-david')


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


        } else if (this.state.isToggleOnAny === false) {

            const handleBtn = document.getElementById('david-button')
            handleBtn.classList.add('david-button')

            this.setState({
                isToggleOnAny: true,
                isToggleOnDavid: true
            })

            setTimeout(() => {

                console.log('David')
                e.preventDefault()
                localStorage.setItem('devSelected', 'David')

                const phaseShift = document.getElementById('david-name')
                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')

                const pushLeft = document.getElementById('david-button')



                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')

                pushLeft.classList.add('push-left-david')

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
        }

    }

    //============== ALEX BUTTON ============= ALEX BUTTON ============= ALEX BUTTON ============= ALEX BUTTON ============= ALEX BUTTON ============= ALEX BUTTON ============= 


    handleAlex = (e) => {

        if (this.state.isToggleOnAny === true) {

          // SELECTOR CONDITIONAL  ==============================================================================================================================

          if (this.state.isToggleOnDavid === true) {
            const returnBtn = document.getElementById('david-button')
            const resetBtn = document.getElementById('david-name')
            returnBtn.classList.add('fade-out')

            setTimeout(() => {
                
                resetBtn.innerHTML = 'David Deaton'
                returnBtn.classList.add('david-return')
                returnBtn.classList.remove('push-left-david')

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

        } else if (this.state.isToggleOnAlex === true) {

            const returnBtn = document.getElementById('alex-button')
            returnBtn.classList.add('alex-return')

            this.setState({
                isToggleOnAlex: false
            })    

        } else if (this.state.isToggleOnRicky === true) {
            const returnBtn = document.getElementById('ricky-button')
            const resetBtn = document.getElementById('ricky-name')
            returnBtn.classList.add('fade-out')

            setTimeout(() => {
                
                resetBtn.innerHTML = 'Chung Hei Fuk'
                returnBtn.classList.add('ricky-return')
                returnBtn.classList.remove('push-left-ricky')

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
           

        } else if (this.state.isToggleOnKarl === true) {

                    
            const returnBtn = document.getElementById('karl-button')
            const resetBtn = document.getElementById('karl-name')
            returnBtn.classList.add('fade-out')

            setTimeout(() => {
                
                resetBtn.innerHTML = 'Karl Behrens'
                returnBtn.classList.add('karl-return')
                returnBtn.classList.remove('push-left-karl')

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

            setTimeout(() => {

                console.log('Alex')
                e.preventDefault()
                localStorage.setItem('devSelected', 'Alex')

                const phaseShift = document.getElementById('alex-name')
                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')

                const pushLeft = document.getElementById('alex-button')


                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')

                pushLeft.classList.add('push-left-alex')


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


        } else if (this.state.isToggleOnAny === false) {

            const handleBtn = document.getElementById('alex-button')
            handleBtn.classList.add('alex-button')

            this.setState({
                isToggleOnAny: true,
                isToggleOnAlex: true


            })

            setTimeout(() => {
                console.log('Alex')
                e.preventDefault()
                localStorage.setItem('devSelected', 'Alex')

                const phaseShift = document.getElementById('alex-name')
                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')

                const pushLeft = document.getElementById('alex-button')


                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')

                pushLeft.classList.add('push-left-alex')




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
        }

    }



    //============== RICKY BUTTON ============= RICKY BUTTON ============= RICKY BUTTON ============= RICKY BUTTON ============= RICKY BUTTON ============= RICKY BUTTON ============= 



    handleRicky = (e) => {

        if (this.state.isToggleOnAny === true) {


           // SELECTOR CONDITIONAL  ==============================================================================================================================

            if (this.state.isToggleOnDavid === true) {
                const returnBtn = document.getElementById('david-button')
                const resetBtn = document.getElementById('david-name')
                returnBtn.classList.add('fade-out')

                setTimeout(() => {
                    
                    resetBtn.innerHTML = 'David Deaton'
                    returnBtn.classList.add('david-return')
                    returnBtn.classList.remove('push-left-david')

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
            } else if (this.state.isToggleOnAlex === true) {

                const returnBtn = document.getElementById('alex-button')
                const resetBtn = document.getElementById('alex-name')
                returnBtn.classList.add('fade-out')

                setTimeout(() => {
                    
                    resetBtn.innerHTML = 'Alex Madrigal'
                    returnBtn.classList.add('alex-return')
                    returnBtn.classList.remove('push-left-alex')

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

            } else if (this.state.isToggleOnRicky === true) {
                const returnBtn = document.getElementById('ricky-button')
                returnBtn.classList.add('ricky-return')

                this.setState({
                    isToggleOnRicky: false
                })
               

            } else if (this.state.isToggleOnKarl === true) {

                const returnBtn = document.getElementById('karl-button')
                const resetBtn = document.getElementById('karl-name')
                returnBtn.classList.add('fade-out')

                setTimeout(() => {
                    
                    resetBtn.innerHTML = 'Karl Behrens'
                    returnBtn.classList.add('karl-return')
                    returnBtn.classList.remove('push-left-karl')

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
            setTimeout(() => {

                console.log('Ricky')
                e.preventDefault()
                localStorage.setItem('devSelected', 'Ricky')

                const phaseShift = document.getElementById('ricky-name')
                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')

                const pushLeft = document.getElementById('ricky-button')

                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')

                pushLeft.classList.add('push-left-ricky')


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

        } else if (this.state.isToggleOnAny === false) {

            const handleBtn = document.getElementById('ricky-button')
            handleBtn.classList.add('ricky-button')
            handleBtn.classList.remove('ricky-return')


            this.setState({
                isToggleOnAny: true,
                isToggleOnRicky: true

            })
            setTimeout(() => {

                console.log('Ricky')
                e.preventDefault()
                localStorage.setItem('devSelected', 'Ricky')


                const phaseShift = document.getElementById('ricky-name')
                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')

                const pushLeft = document.getElementById('ricky-button')

                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')

                pushLeft.classList.add('push-left-ricky')


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

        }
    }


    //============== KARL BUTTON ============= KARL BUTTON ============= KARL BUTTON ============= KARL BUTTON ============= KARL BUTTON ============= KARL BUTTON ============= 


    handleKarl = (e) => {

        if (this.state.isToggleOnAny === true) {

             // SELECTOR CONDITIONAL  ==============================================================================================================================

             if (this.state.isToggleOnDavid === true) {
                const returnBtn = document.getElementById('david-button')
                const resetBtn = document.getElementById('david-name')
                returnBtn.classList.add('fade-out')

                setTimeout(() => {
                    
                    resetBtn.innerHTML = 'David Deaton'
                    returnBtn.classList.add('david-return')
                    returnBtn.classList.remove('push-left-david')

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
            } else if (this.state.isToggleOnAlex === true) {

                const returnBtn = document.getElementById('alex-button')
                const resetBtn = document.getElementById('alex-name')
                returnBtn.classList.add('fade-out')

                setTimeout(() => {
                    
                    resetBtn.innerHTML = 'Alex Madrigal'
                    returnBtn.classList.add('alex-return')
                    returnBtn.classList.remove('push-left-alex')

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

            } else if (this.state.isToggleOnRicky === true) {
                const returnBtn = document.getElementById('ricky-button')
                const resetBtn = document.getElementById('ricky-name')
                returnBtn.classList.add('fade-out')

                setTimeout(() => {
                    
                    resetBtn.innerHTML = 'Chung Hei Fuk'
                    returnBtn.classList.add('ricky-return')
                    returnBtn.classList.remove('push-left-ricky')

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
               

            } else if (this.state.isToggleOnKarl === true) {

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
            setTimeout(() => {

                console.log('Karl')
                e.preventDefault()
                localStorage.setItem('devSelected', 'Karl')


                const phaseShift = document.getElementById('karl-name')
                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')

                const pushLeft = document.getElementById('karl-button')

                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')

                pushLeft.classList.add('push-left-karl')


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

        } else if (this.state.isToggleOnAny === false) {

            const handleBtn = document.getElementById('karl-button')
            handleBtn.classList.add('karl-button')
            handleBtn.classList.remove('karl-return')


            this.setState({
                isToggleOnAny: true,
                isToggleOnKarl: true,

            })

            setTimeout(() => {

                console.log('Karl')
                e.preventDefault()
                localStorage.setItem('devSelected', 'Karl')

                const phaseShift = document.getElementById('karl-name')
                const buttonContainer = document.createElement('div')
                const linkedInBtn = document.createElement('button')
                const githubBtn = document.createElement('button')

                // possible timeout
                const pushLeft = document.getElementById('karl-button')



                phaseShift.innerHTML = ''
                linkedInBtn.id = 'button-linkedin'
                githubBtn.id = 'button-github'

                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')

                // possible timeout
                pushLeft.classList.add('push-left-karl')


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


        }


    }


    render() {
        console.log('any ', this.state.isToggleOnAny)
        console.log('david ', this.state.isToggleOnDavid)
        console.log('alex ', this.state.isToggleOnAlex)
        console.log('ricky ', this.state.isToggleOnRicky)
        console.log('karl ', this.state.isToggleOnKarl)


        return (
            <div className='profile-group'>
                <div className='button-group'>

                    <div className='david'>
                        <button className='button' id='david-button' onClick={this.handleDavid}>
                            <img src={david} className="dev-image" id='david-img' alt='personalimage'></img>
                            <p id='david-name'>David Deaton</p>
                        </button>
                    </div>

                    <div className='alex'>
                        <button className='button' id='alex-button' onClick={this.handleAlex}>
                            <img src={alex} className="dev-image" id='alex-img' alt='personalimage'></img>
                            <p id='alex-name'>Alex Madrigal</p>
                        </button>
                    </div>

                    <div className='ricky'>
                        <button className='button' id='ricky-button' onClick={this.handleRicky}>
                            <img src={ricky} className="dev-image" id='ricky-img' alt='personalimage'></img>
                            <p id='ricky-name'>Chung Hei Fuk</p>
                        </button>
                    </div>

                    <div className='karl' id='karl'>
                        <button className='button' id='karl-button' onClick={this.handleKarl}>
                            <img src={karl} className="dev-image" id='karl-img' alt='personalimage'></img>
                            <p id='karl-name'>Karl Behrens</p>
                        </button>
                    </div>

                    {/* <div className='selected' id='selected'>
                        <DevData />
                    </div> */}

                </div>



            </div>
        )
    }
}
export default DevProfiles