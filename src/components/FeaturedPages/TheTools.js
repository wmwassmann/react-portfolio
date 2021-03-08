import React from 'react'
import { Link } from 'react-router-dom';
import './css/style.css'

export default function TheTools() {
    return (
        <main className="container">
        <div className='featured-container'>
            <Link to={'/4'}>
                Continue
         </Link>
            The Tools
        </div>
        </main>
    )
}
