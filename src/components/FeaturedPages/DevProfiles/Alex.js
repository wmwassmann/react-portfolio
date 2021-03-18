import React from 'react'
import { Component } from 'react';
import LinkedIn from './img/linkedin.png'
import GitHub from './img/github.webp'
import alex from '../../../pages/img/Alex.jpg'
import './css/style.css'



export class Alex extends Component {




    handleLinkedIn = (e) => {
        if (this.state === 0) {
            window.location.href = 'https://www.linkedin.com/in/alex-madrigal-b5b8461a9/';
        }
        e.preventDefault()
    }

    handleGitHub = (e) => {
        window.location.href = 'https://www.linkedin.com/in/karl-e-behrens/';
        e.preventDefault()
    }

    render() {


        return (

            <div className='selected-container'>
                <div className='img-button-container'>
                    <img src={alex} className="dev-image-selected" alt='personalimage'></img>
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
export default Alex