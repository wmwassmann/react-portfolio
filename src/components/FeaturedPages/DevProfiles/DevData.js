import React from 'react';
import David from './David'
import Alex from './Alex'
import Ricky from './Ricky'
import Karl from './Karl'


function DevData() { 


    let value = localStorage.getItem('devSelected')    
    switch (value) {
    
    case 'David':
       value = <David />;
       break;     
   
    case 'Alex':
       value = <Alex />;
       break;     
    
    case 'Ricky':
       value = <Ricky />;
       break;     
    
    case 'Karl':
       value = <Karl />;
       break;    
       
       default:
       
    }

    return (        
        <div>
            <h4 className='devName'>{value}</h4>
        </div>
        
    )
}

export default DevData;

console.log(DevData())