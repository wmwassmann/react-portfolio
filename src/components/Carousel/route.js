import React from 'react';
import '.assets/css/auditModal.css';
import AuditCarousel from './Carousel.js';



function Selector() {
    
    let modal= <div>      
        < AuditCarousel />
    </div>;



    return (
            <span>{modal}</span>
    );
}

export default Selector;