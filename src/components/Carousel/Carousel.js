
import React, { Component } from 'react';
import Card from './Card.js';
import './assets/css/carousel.css';
import javascriptquiz from './assets/img/quiz.png'
import passwordgenerator from './assets/img/password.png'
import weatherdashboard from './assets/img/weather.png'
import workdayscheduler from './assets/img/planner.png'
import dndbuddy from './assets/img/dndbuddy.png'
import mobile from './assets/img/mobile-models.png'
import teamy from './assets/img/teamy.png'
import notetaker from './assets/img/note-taker.png';




export class AuditCarousel extends Component {
  
    constructor(props) {
        super(props)
         
      

        this.state = {
            current_card: 1           
        }           
    
    }  


    
    componentDidMount() {
        let first_card_clone = this.card_container.children[0].cloneNode(true);
        let last_card_clone = this.card_container.children[this.card_container.children.length - 1].cloneNode(true);

        this.card_container.insertBefore(last_card_clone, this.card_container.children[0]);
        this.card_container.append(first_card_clone);

        this.card_container.style.transitionDuration = '0.5s';
        this.card_container.style.transform = `translate(-${1089}px)`    
      
     
    }  
        

    
    handle_next = () => {
        if (this.state.current_card < this.card_container.children.length - 1) {
            
            let new_current_card = this.state.current_card + 1; 

            
            this.setState({current_card: new_current_card}, () => {
                this.card_container.style.transitionDuration = '0.5s';
                this.card_container.style.transform = `translate(-${1089 * this.state.current_card}px)`;

                if (this.state.current_card === this.card_container.children.length - 1) {
                    setTimeout(() => {
                        this.card_container.style.transitionDuration = '0.0s';
                        this.card_container.style.transform = `translate(-${1089}px)`
                        this.setState({ current_card: 1 });
                    }, 502)                     
                }
            }) 
        } else {
            return;
        }
    }

    handle_previous = () => {
        if (this.state.current_card > 0) {
            let new_current_card = this.state.current_card - 1; 
            
            this.setState({current_card: new_current_card}, () => {
                this.card_container.style.transitionDuration = '0.5s';
                this.card_container.style.transform = `translate(-${1089 * this.state.current_card}px)`;

                if (this.state.current_card === 0) {
                    setTimeout(() => {
                        this.card_container.style.transitionDuration = '0.0s';
                        this.card_container.style.transform = `translate(-${1089 * (this.card_container.children.length - 2)}px)`;
                        this.setState({ current_card: this.card_container.children.length - 2 });
                    }, 502)                     
                }

            })
        } else {
            return;
        }     

        
    } 




    handle_link = (e) => {
        if (this.state.current_card === 1) {
        window.location.href='https://github.com/wmwassmann/Homework-04-Quiz';
        e.preventDefault()        
    } else if (this.state.current_card === 2) {
        window.location.href='https://github.com/wmwassmann/03-Homework';
        e.preventDefault()       
    } else if (this.state.current_card === 3) {
        window.location.href='https://github.com/wmwassmann/Homework-05-Calendar';
        e.preventDefault()        
    } else if (this.state.current_card === 4) {
        window.location.href='https://github.com/wmwassmann/Homework-06-Weatherdash';
        e.preventDefault()      
    } else if (this.state.current_card === 5) {
        window.location.href='https://github.com/wmwassmann/homework-employee-08';
        e.preventDefault()       
    } else if (this.state.current_card === 6) {
        window.location.href='https://github.com/wmwassmann/homework-notes-09'
        e.preventDefault()        
    } else if (this.state.current_card === 7) {
        window.location.href='https://github.com/wmwassmann/dndbuddy-1'
        e.preventDefault()        
    } else if (this.state.current_card === 8) {
        window.location.href='https://github.com/wmwassmann/dnd-buddy-2.0'
        e.preventDefault()        
    }
       
    }

    render() {           
        return (
            <div className='portfolio'>
                    
                    <div className='view-port' style={styles.view_port}>
                        <div ref={ref_id => this.card_container = ref_id} className='card-container portrait' style={styles.card_container}>
                            < Card card_number={javascriptquiz} />                                                    
                            < Card card_number={passwordgenerator} />
                            < Card card_number={weatherdashboard}/>
                            < Card card_number={workdayscheduler}/>
                            < Card card_number={dndbuddy}/>
                            < Card card_number={mobile}/>   
                            < Card card_number={teamy}/>
                            < Card card_number={notetaker}/>                                                   
                        </div>
                    </div>    
                <div className='modalbar' style={styles.navBar}>                
                    <button className='button' style={styles.buttonPrevious} onClick={this.handle_previous}>Prev</button>
                    <button className='button' style={styles} onClick={this.handle_link}>Visit Repository</button>                             
                    <button className='button' style={styles.buttonNext} onClick={this.handle_next}>Next</button>
                </div>            
            </div>
        )
    }
}

const styles = {    
    view_port: {
        position: 'relative',             
        top: '305px',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '1089px',
        height: '593px',
        overflow: 'hidden'                  
        
    },
    card_container: {
        display: 'flex',
        flexDirection: 'row',
        width: 'fit-content'
    },
    navBar: {
        display: 'flex',
        justifyContent: 'space-around',
        position: 'relative',        
        right: '7px',
        top: '20px'        
    },
    buttonPrevious: {
        position: 'relative',
        width: '90px',
        left: '30px',    
    },
    buttonNext: {
        position: 'relative',
        width: '90px',
        right: '10px'                      
    }
   
   

}

export default AuditCarousel;

