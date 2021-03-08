import React from 'react'
import { Link } from 'react-router-dom';
import './css/style.css'

export default function WhatsNext() {
    return (
        <main className="container">
        <div className='featured-container'>
            <Link to={'/0'}>
                Continue
        </Link>
            What's Next?
        </div>
        </main>
    )
}
