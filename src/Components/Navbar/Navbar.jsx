import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import Logo from '../../Assets/GentleMen.jpg'

import useStyles from './Styles'

import { Link, useLocation } from 'react-router-dom';

function Navbar({ totalItems }) {
    const classes = useStyles();
    const location = useLocation();
    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={Logo} alt="commerce.js" height="25px" className={classes.image}/>
                        Gentlemen Clothing
                    </Typography> 
                    {location.pathname === '/' && (
                            <div className={classes.button}>
                                <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                                <Badge badgeContent={totalItems} color="secondary"><AddShoppingCart /></Badge>
                                </IconButton>
                            </div>
                            )}     
                </Toolbar>
            </AppBar>
        </div> 
    )
}

export default Navbar
