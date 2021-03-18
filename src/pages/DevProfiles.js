import React from 'react';
import DevData from '../components/FeaturedPages/DevProfiles/DevData';
import './css/style.css'
import david from './img/David.jpg'
import alex from './img/Alex.jpg'
import ricky from './img/Ricky.jpg'
import karl from './img/Karl.jpg'






export class DevProfiles extends React.Component {






    handleDavid = (e) => {
        setTimeout(() => {
            window.location.reload(true)
            console.log('David')
            e.preventDefault()
            localStorage.setItem('devSelected', 'David')
        
        }, 700)

    }

    handleAlex = (e) => {
        setTimeout(() => {
            window.location.reload(true)
            console.log('Alex')
            e.preventDefault()
            localStorage.setItem('devSelected', 'Alex')
        }, 700)

    }

    handleRicky = (e) => {
        setTimeout(() => {
            window.location.reload(true)
            console.log('Ricky')
            e.preventDefault()
            localStorage.setItem('devSelected', 'Ricky')
        }, 700)

    }

    handleKarl = (e) => {
        setTimeout(() => {
            window.location.reload(true)
            console.log('Karl')
            e.preventDefault()
            localStorage.setItem('devSelected', 'Karl')
        }, 700)

    }



    render() {



        return (
            <div className='profile-group'>
                <div className='button-group'>

                    <div className='david'>
                        <button className='button david-button' onClick={this.handleDavid}>
                            <img src={david} className="dev-image" alt='personalimage'></img>
                            <p>David Deaton</p>
                        </button>
                    </div>

                    <div className='alex'>
                        <button className='button alex-button' onClick={this.handleAlex}>
                            <img src={alex} className="dev-image" alt='personalimage'></img>
                            <p>Alex Madrigal</p>
                        </button>
                    </div>

                    <div className='ricky'>
                        <button className='button ricky-button' onClick={this.handleRicky}>
                            <img src={ricky} className="dev-image" alt='personalimage'></img>
                            <p>Chung Hei Fuk</p>
                        </button>
                    </div>

                    <div className='karl'>
                        <button className='button karl-button' onClick={this.handleKarl}>
                            <img src={karl} className="dev-image" alt='personalimage'></img>
                            <p>Karl Behrens</p>
                        </button>
                    </div>

                <div className='selected'>
                    <DevData />
                </div>

                </div>


               
            </div>
        )
    }
}
export default DevProfiles