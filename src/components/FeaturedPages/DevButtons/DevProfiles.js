import React from 'react';
import '../css/style.css'
// import David from '../DevProfiles/David';
import Developer from './Developer/Developer'
// import ButtonDavid from './ButtonDavid/ButtonDavid'
// import ButtonAlex from './ButtonAlex/ButtonAlex'
// import ButtonRicky from './ButtonRicky/ButtonRicky';
// import ButtonKarl from './ButtonKarl/ButtonKarl'
import david from './../img/David.jpg'
import alex from './../img/Alex.jpg'
import ricky from './../img/Ricky.jpg'
import karl from './../img/Karl.jpg'


export class DevProfiles extends React.Component {

    constructor() {
        super()
        this.state = {
            webDevs: [
                {                    
                    name: 'David Deaton ', 
                    selected: false, 
                    source: david,
                    tag: 'david',
                    github: 'https://github.com/DavidVDeaton',
                    linkedin: 'https://www.linkedin.com/in/david-v-deaton/',
                    bio: 'David is a force of nature with JavaScript and CSS. He has shown me that no problem is too difficult and can be solved through patience, resilience, and a logical approach. When presented with a challenge, David is the first to take initiative in learning language or method to get the job done. It was his innovation with CSS animation (specifically dice rolling) that inspired me to learn how to animate this very page.'
                },
                {                    
                    name: 'Alex Madrigal ', 
                    selected: false, 
                    source: alex,
                    tag: 'alex',
                    github: 'https://github.com/jam-madrigal',
                    linkedin: 'https://www.linkedin.com/in/alex-madrigal-b5b8461a9/',
                    bio: 'Alex contributed his extensive front-end skills and enthusiasm to RPG: Adventurer\'s academy. His greatest strength lies in his ability to visualize and conceptualize a project\'s aesthetic in story-board fashion. He will go above and beyond frequently working late hours bring that vision to life through front-end JavaScript and from-scratch CSS.'
                },  
                {                    
                    name: 'Chung Hei Fuk ', 
                    selected: false, 
                    source: ricky,
                    tag: 'ricky',
                    github: 'https://github.com/rickyfuk',
                    linkedin: 'https://www.linkedin.com/in/ricky-fuk/',
                    bio:'If our group ran into a bug, Ricky had an answer. Even if it took dozens of trial and error runs no problem was too difficult for Ricky. His sheer work ethic, logical process, and resourcefulness with JavaScript inspired us to press on through the most difficult of times. Along with phenomial JavaScript skills, he is an expert in back-end applications such as MongoDB, Sequelize, and Handlebars.'
                },
                {                    
                    name: 'Karl Behrens ', 
                    selected: false, 
                    source: karl,
                    tag: 'karl',
                    github: 'https://github.com/behrenskarl',
                    linkedin: 'https://www.linkedin.com/in/karl-e-behrens/',
                    bio: 'Karl has proven himself to be a valuable think tank in the collaborative process. In developing the RPG: Adventurer\'s Academy, He and I bounced numerous ideas off of one another to bring the project to life. His backend skills are equally fantastic, working with MySQL databases and Passport for authentication for user login systems.'
                },
          
            ]     
        }        
    }




    selected_developer = (name) => {     
        let currentDev = this.state.webDevs.map((d) => {
            if(d.name === name) {
                d.selected = true;
            }                      
            
            return d;          
              
        });
        
       this.setState({webDevs: currentDev})        
    }
    
   


    render() {  
        return (
            <div className='profile-group'>
                
                <div className='button-group'>   
                    {this.state.webDevs.map((developer) => (
                        <Developer 
                            name={developer.name}
                            key={developer.name}
                            selected={developer.selected}
                            source={developer.source}
                            tag={developer.tag}
                            bio={developer.bio}
                            linkedin={developer.linkedin}
                            github={developer.github}
                            selected_developer={this.selected_developer}
                     
                            />
                    ))
                }
                


                    {/* <ButtonDavid/>
                    <ButtonAlex/>
                    <ButtonRicky/>
                    <ButtonKarl/> */}
                    <div className='selected' id='selected'>
                        <div className='dev-text-content' id='dev-text-content'>
                        {/* Empty space for descriptions */}
                        
                        </div>
                    </div>

                </div>
              
            </div>


        )
    }
}
export default DevProfiles