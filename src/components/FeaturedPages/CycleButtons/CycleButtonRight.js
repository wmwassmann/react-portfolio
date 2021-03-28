import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa";
import '../css/style.css';

export class CycleButtonRight extends Component {


    clickMe = (e) => {
        if (localStorage.getItem('featured-page') === '0') {
            window.location.href = './1'
            localStorage.setItem('featured-page', '1')

        }
        else if (localStorage.getItem('featured-page') === '1') {
            window.location.href = './2'
            localStorage.setItem('featured-page', '2')
        }

        else if (localStorage.getItem('featured-page') === '2') {
            window.location.href = './3'
            localStorage.setItem('featured-page', '3')

        }
        else if (localStorage.getItem('featured-page') === '3') {
            window.location.href = './4'
            localStorage.setItem('featured-page', '4')
        }

        else if (localStorage.getItem('featured-page') === '4') {
            window.location.href = './0'
            localStorage.setItem('featured-page', '0')
        }
    }




    render() {
        return (
            <div>
                <FaChevronRight className='next-button' onClick={this.clickMe} />
            </div>
        )
    }
}

export default CycleButtonRight
