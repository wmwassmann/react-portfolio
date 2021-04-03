import React from 'react';
import '../css/style.css'
import Developer from './Developer/Developer'
// import ButtonDavid from './ButtonDavid/ButtonDavid'
// import ButtonAlex from './ButtonAlex/ButtonAlex'
// import ButtonRicky from './ButtonRicky/ButtonRicky';
// import ButtonKarl from './ButtonKarl/ButtonKarl'



export class DevProfiles extends React.Component {

    constructor() {
        super()
        this.state = {
            webDevs: [
                {                    
                    name: 'david ', selected: false
                },
                {                    
                    name: 'alex ', selected: false
                },
                {                    
                    name: 'ricky ', selected: false
                },
                {                    
                    name: 'karl ', selected: false
                },
                
            ]
        }
    }


    selected_developer = (name) => {
        let currentDev = this.state.webDev.map( (d) => {
            if(d.name === name) {
                d.selected = true;
            }
            return d;
        });
        // new array replacing old state with currentDev. 
        // will need to update and replace currentDev.
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