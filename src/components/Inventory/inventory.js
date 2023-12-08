import React from 'react'
import { motion } from 'framer-motion'
import { Grid } from '@mui/material';
import myphotomain from './img/inventoryMain.jpg';
import myphotosecondary from './img/kit.jpg';

import './css/inventory-style.css'

const inventory = () => {

    const handle_deployed = () => {
        console.log('deployed')
    }
    const handle_hover = () => {
        const reveal = document.getElementById('inventory-secondary-img')
        reveal.classList.add('reveal-mobile')
    }

    const handle_remove = () => {
        const reveal = document.getElementById('inventory-secondary-img')
        reveal.classList.remove('reveal-mobile')      
    }











    return (
        <motion.div className="inventory-container text-body" initial={{ x: -1500, opacity: 0 }} exit={{ x: 0, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
            <Grid className='inventory-text' container spacing={3}>

                <Grid container item xs={12} spacing={3}>
                    <div className='inventory-header'>
                        Inventory App
                    </div>
                </Grid>
                <Grid container item xs={7} spacing={3}>
                    {/* <FormRow / */}
                    On its surface, this inventory spreadsheet appears to be fairly simple. However, it utilizes React-Redux to allow for ease of scalability with
                    regards to state management.
                </Grid>
                <Grid container item xs={7} spacing={3}>
                    {/* <FormRow /> */}
                    The application was designed with privilages in mind, manager, purchaser, employee, ect. A user's privilage dictates what data is available to them.
                    React-Redux allows me to hold state across many different pages and make appropriate API calls based on who is signed in to the application.
                </Grid>
                <Grid container item xs={7} spacing={3}>
                    {/* <FormRow /> */}
                    Future additions include:
                    <ul>
                        <li>
                            Contacts list which will hook into a Socket.io messaging system
                        </li>
                        <li>
                            Detailed Inventory and Kit modals displaying additional information
                        </li>
                        <li>
                            Fully functional privilages control.
                        </li>
                        <li>
                            Manager privilages to add and subtract new spreadsheet values
                        </li>
                    </ul>
                </Grid>
                <div className='hover-over'>
                    Hover over the thumbnail to see more information, and click to view the deployed page.
                </div>
                <Grid container item xs={7} spacing={3}>
                    {/* <FormRow /> */}
                    Uses for this application range from a simple spreadsheet, to inventory or stock management.
                </Grid>

                <form className="inventory-github" action='https://github.com/wmwassmann/booking-inventory'>
                    <input type='submit' className='git-button' />
                </form>

            </Grid>
            <form className='inventory-side' action='https://inventorypersonalapp.herokuapp.com/' onClick={handle_deployed} onMouseOver={handle_hover} onMouseOut={handle_remove}>
                <input type='submit' className='inventory-main-img' />
                
            </form>
            <img src={myphotosecondary} className="inventory-secondary-img" id='inventory-secondary-img' alt='personalimage'></img>
            {/* <img src={myphotosecondary} className="img-fluid float-left mobile-photo" alt='personalimage'></img> */}
        </motion.div>

    )
}

export default inventory
