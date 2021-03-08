import React from 'react'
import { Link } from 'react-router-dom';
import './css/style.css'

export default function TheBuddies() {
    return (
        <main className="container">
        <div className='featured-container'>
            <Link to={'/2'}>
                Continue
         </Link>
            About Us
        </div>
        </main>
    )
}
