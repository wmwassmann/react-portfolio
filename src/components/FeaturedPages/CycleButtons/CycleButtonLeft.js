import React, { Component } from 'react'

import { FaChevronLeft } from "react-icons/fa";
import '../css/style.css';

export class CycleButtonLeft extends Component {


    clickMe = (e) => {       

        if (localStorage.getItem('featured-page') === '0') {
            window.location.href = './4'
            localStorage.setItem('featured-page', '4')
        
        }
        else if (localStorage.getItem('featured-page') === '4') {
            window.location.href = './3'
            localStorage.setItem('featured-page', '3')
        }

        else if (localStorage.getItem('featured-page') === '3') {
            window.location.href = './2'
            localStorage.setItem('featured-page', '2')

        }
        else if (localStorage.getItem('featured-page') === '2') {
            window.location.href = './1'
            localStorage.setItem('featured-page', '1')
        }

        else if (localStorage.getItem('featured-page') === '1') {
            window.location.href = './rpgaa'
            localStorage.setItem('featured-page', '0')
        }


                   

    }


    render() {

        return (
            <div>
                <FaChevronLeft className='prev-button' id='wing-slide-left' onClick={this.clickMe} />
            </div>
        )
    }
}

export default CycleButtonLeft
