import React, {Component} from 'react'
import './../../css/style.css'
import DevData from './../../DevProfiles/DevData'


export default class Developer extends Component {

    constructor(props){
        super(props);
        this.state={
            anySelected: false
            
        }
    }




    handle_selected = (e) => {   
        e.preventDefault()    

        if(localStorage.getItem('devSelected') !== (this.props.name)) {
            console.log('devSelected Local Storage does not equal', (this.props.name))
            this.setState({anySelected: false})
        } 

        if (this.state.anySelected === true) {
            this.setState({anySelected: false})
            console.log('any selected = false')
        }      
        
        setTimeout(() => {
            localStorage.setItem('devSelected', (this.props.name))
            this.setState({anySelected: true})
            console.log('devSelected Local Storage', (this.props.name))
            console.log('any selected = true')

            const sendDev = document.getElementById(`${this.props.tag}button`)
            sendDev.classList.add(`${this.props.tag}button`)

        }, 1000)
       
       this.props.selected_developer(this.props.name)   

    }

    render() {
        return (           
             <div>    
                <button className='button dev-button border-pop' id={`${this.props.tag}button`} onClick={this.handle_selected}>
                    <img src={this.props.source} className="dev-image" id={`${this.props.tag}img`} alt='personalimage'></img>
                    <div>
                        {this.props.name}                    
                    </div>
                </button>   

                <div className={`${this.props.tag}dev-pure-text`}  id={`${this.props.tag}dev-pure-text`}>
                        <DevData />
                </div>              
            </div>
        )
    }
}


