import React from 'react';
import DevData from '../components/FeaturedPages/DevProfiles/DevData';
import { Typography } from '@material-ui/core';
import Typed from "react-typed";
import './css/style.css'
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




    handleDavid = (e) => {


        if (this.state.isToggleOnAny === true) {

            if (this.state.isToggleOnDavid === true) {
                const returnBtn = document.getElementById('david-button')
                returnBtn.classList.add('david-return')
                this.setState({
                    isToggleOnDavid: false
                })
            } else if (this.state.isToggleOnAlex === true) {
                const returnBtn = document.getElementById('alex-button')
                returnBtn.classList.add('alex-return')
                this.setState({
                    isToggleOnAlex: false
                })
            } else if (this.state.isToggleOnRicky === true) {
                const returnBtn = document.getElementById('ricky-button')
                returnBtn.classList.add('ricky-return')
                this.setState({
                    isToggleOnRicky: false
                })
            } else if (this.state.isToggleOnKarl === true) {
                const returnBtn = document.getElementById('karl-button')
                returnBtn.classList.add('karl-return')
                this.setState({
                    isToggleOnKarl: false
                })
            }

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

            }, 700)
        }

    }




    handleAlex = (e) => {

        if (this.state.isToggleOnAny === true) {
            if (this.state.isToggleOnDavid === true) {
                const returnBtn = document.getElementById('david-button')
                returnBtn.classList.add('david-return')
                this.setState({
                    isToggleOnDavid: false
                })
            } else if (this.state.isToggleOnAlex === true) {
                const returnBtn = document.getElementById('alex-button')
                returnBtn.classList.add('alex-return')
                this.setState({
                    isToggleOnAlex: false
                })
            } else if (this.state.isToggleOnRicky === true) {
                const returnBtn = document.getElementById('ricky-button')
                returnBtn.classList.add('ricky-return')
                this.setState({
                    isToggleOnRicky: false
                })
            } else if (this.state.isToggleOnKarl === true) {
                const returnBtn = document.getElementById('karl-button')
                returnBtn.classList.add('karl-return')
                this.setState({
                    isToggleOnKarl: false
                })
            }

            const handleBtn = document.getElementById('alex-button')
            handleBtn.classList.add('alex-button')
            handleBtn.classList.remove('alex-return')

            this.setState({
                isToggleOnAny: true,
                isToggleOnAlex: true
            })

            setTimeout(() => {
                // window.location.reload(true)
                console.log('Alex')
                e.preventDefault()
                localStorage.setItem('devSelected', 'Alex')

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
            }, 700)
        }

    }

    handleRicky = (e) => {

        if (this.state.isToggleOnAny === true) {

            if (this.state.isToggleOnDavid === true) {
                const returnBtn = document.getElementById('david-button')
                returnBtn.classList.add('david-return')
                this.setState({
                    isToggleOnDavid: false
                })
            } else if (this.state.isToggleOnAlex === true) {
                const returnBtn = document.getElementById('alex-button')
                returnBtn.classList.add('alex-return')
                this.setState({
                    isToggleOnAlex: false
                })
            } else if (this.state.isToggleOnRicky === true) {
                const returnBtn = document.getElementById('ricky-button')
                returnBtn.classList.add('ricky-return')
                this.setState({
                    isToggleOnRicky: false
                })
            } else if (this.state.isToggleOnKarl === true) {
                const returnBtn = document.getElementById('karl-button')
                returnBtn.classList.add('karl-return')
                this.setState({
                    isToggleOnKarl: false
                })
            }

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
            }, 700)

        }
    }
    handleKarl = (e) => {

        if (this.state.isToggleOnAny === true) {

            if (this.state.isToggleOnDavid === true) {
                const returnBtn = document.getElementById('david-button')
                returnBtn.classList.add('david-return')
                this.setState({
                    isToggleOnDavid: false
                })
            } else if (this.state.isToggleOnAlex === true) {
                const returnBtn = document.getElementById('alex-button')
                returnBtn.classList.add('alex-return')
                this.setState({
                    isToggleOnAlex: false
                })
            } else if (this.state.isToggleOnRicky === true) {
                const returnBtn = document.getElementById('ricky-button')
                returnBtn.classList.add('ricky-return')
                this.setState({
                    isToggleOnRicky: false
                })
            } else if (this.state.isToggleOnKarl === true) {
                const returnBtn = document.getElementById('karl-button')
                returnBtn.classList.add('karl-return')
                this.setState({
                    isToggleOnKarl: false
                })
            }

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
                phaseShift.innerHTML = ''
    
                buttonContainer.classList.add('button-container')
                linkedInBtn.classList.add('button-links')
                githubBtn.classList.add('button-links')
    
    
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
                            <p>David Deaton</p>
                        </button>
                    </div>

                    <div className='alex'>
                        <button className='button' id='alex-button' onClick={this.handleAlex}>
                            <img src={alex} className="dev-image" id='alex-img' alt='personalimage'></img>
                            <p>Alex Madrigal</p>
                        </button>
                    </div>

                    <div className='ricky'>
                        <button className='button' id='ricky-button' onClick={this.handleRicky}>
                            <img src={ricky} className="dev-image" id='ricky-img' alt='personalimage'></img>
                            <p>Chung Hei Fuk</p>
                        </button>
                    </div>

                    <div className='karl' id='karl'>
                        <button className='button' id='karl-button' onClick={this.handleKarl}>
                            <img src={karl} className="dev-image" id='karl-img' alt='personalimage'></img>
                            <p id='karl-name'>Karl Behrens</p>
                        </button>
                    </div>

                    <div className='selected' id='selected'>
                        <DevData />
                    </div>

                </div>



            </div>
        )
    }
}
export default DevProfiles