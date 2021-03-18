
import React from 'react'
import { Component } from 'react';
import LinkedIn from './img/linkedin.png'
import GitHub from './img/github.webp'
import ricky from '../../../pages/img/Ricky.jpg'
import './css/style.css'


export class Ricky extends Component {

    handleLinkedIn = (e) => {
        window.location.href = 'https://www.linkedin.com/in/Ricky-e-behrens/';
        e.preventDefault()
    }

    handleGitHub = (e) => {
        window.location.href = 'https://www.linkedin.com/in/Ricky-e-behrens/';
        e.preventDefault()
    }

    render() {
        return (
            <div className='selected-container'>
            <div className='img-button-container'>                
                <img src={ricky} className="dev-image-selected" alt='personalimage'></img>
                <div className='button-container'>
                    <button className='button-links' onClick={this.handleLinkedIn}>
                        <img src={LinkedIn} className="button-icon" alt='personalimage'></img>
                    </button>
                    <button className='button-links' onClick={this.handleGitHub}>
                        <img src={GitHub} className="button-icon" alt='personalimage'></img>
                    </button>
                </div>
            </div>
            </div>
        )
    }
}
export default Ricky