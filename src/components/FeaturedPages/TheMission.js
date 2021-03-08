import React from 'react'
import { Link } from 'react-router-dom';
import './css/style.css'

export default function TheMission() {
    return (
        <main className="container">
        <div className='featured-container'>
            <Link to={'/3'}>
                Continue
         </Link>
            The Mission
        </div>
        </main>
    )
}
