import React from 'react'
import { motion } from 'framer-motion'
import { Grid } from '@material-ui/core';
import myphotomain from './img/inventoryMain.jpg';
import myphotosecondary from './img/kit.jpg';
import './css/inventory-style.css'

const inventory = () => {
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
                    The application was designed with privilages in mind, manager, purchaser, employee, ect. A user's privilage would dictate what data would be available to them.
                    This 
                </Grid>
                <Grid container item xs={7} spacing={3}>
                    {/* <FormRow /> */}
                    hi
                </Grid>
            </Grid>
            <div className='inventory-main'>
                <img src={myphotomain} className="inventory-main-img" alt='personalimage'></img>
            </div>

            {/* <img src={myphotosecondary} className="img-fluid float-left mobile-photo" alt='personalimage'></img> */}
        </motion.div>

    )
}

export default inventory
