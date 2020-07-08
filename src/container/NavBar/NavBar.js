import React from 'react';
import {NavLink,withRouter} from 'react-router-dom';
import classes from './NavBar.css'


const NavBar =(props)=>{
   return(
    <div className={classes.NavBar}>
        <h2>GitCOmpare</h2>
        <h4 ><NavLink to="/">Home</NavLink></h4>
    </div>
   ); 
}

export default withRouter(NavBar);