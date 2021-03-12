import React, { Component } from 'react';

import david from './../img/David.jpg'
import alex from './../img/Alex.jpg'
import ricky from './../img/Ricky.jpg'
import karl from './../img/Karl.jpg'






let text = 'hello'


export class DevProfiles extends Component {

    constructor(props) {
        super(props)
        this.state = {isToggleOn: true}
    }
  

    handleDavid = (e) => {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))

        console.log('David')
        e.preventDefault();        
        this.handleReturn()
    }
    
    handleAlex = (e) => {
        console.log('Alex')
        e.preventDefault();
        this.handleReturn()
    }

    handleRicky = (e) => {
        console.log('Ricky')
        e.preventDefault();
        this.handleReturn()
    }

    handleKarl = (e) => {
        console.log('Karl')
        e.preventDefault();
        this.handleReturn()
    }

    handleReturn() {
        console.log('Return')        
    }
   

render() {
    


    

    return (
        <div className='profile-group'>
            <div className='button-group'>

                <div>
                    <button className='button' onClick={this.handleDavid}>
                        <img src={david} className="dev-image" alt='personalimage'></img>
                        <p>David Deaton</p>
                    </button>
                </div>

                <div>
                    <button className='button' onClick={this.handleAlex}>
                        <img src={alex} className="dev-image" alt='personalimage'></img>
                        <p>Alex Madrigal</p>
                    </button>
                </div>

                <div>
                    <button className='button' onClick={this.handleRicky}>
                        <img src={ricky} className="dev-image" alt='personalimage'></img>
                        <p>Chung Hei Fuk</p>
                    </button>
                </div>

                <div>
                    <button className='button' onClick={this.handleKarl}>
                        <img src={karl} className="dev-image" alt='personalimage'></img>
                        <p>Karl Behrens</p>
                    </button>
                </div>

            </div>

            
            <div className='selected' id='selected'>
                {text}
                  
            </div>
        </div>
    )
}
}
export default DevProfiles