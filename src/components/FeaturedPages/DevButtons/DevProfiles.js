import React from 'react';
import '../css/style.css'
import ButtonDavid from './ButtonDavid/ButtonDavid'
import ButtonAlex from './ButtonAlex/ButtonAlex'
import ButtonRicky from './ButtonRicky/ButtonRicky';
import ButtonKarl from './ButtonKarl/ButtonKarl'



export class DevProfiles extends React.Component {


    render() {  
        return (
            <div className='profile-group'>
                <div className='button-group'>   

                    <ButtonDavid/>
                    <ButtonAlex/>
                    <ButtonRicky/>
                    <ButtonKarl/>
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