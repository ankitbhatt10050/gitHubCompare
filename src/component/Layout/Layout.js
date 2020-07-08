import React from 'react';
import Aux from '../../hoc/auxillary';
import classes from './Layout.css';
import NavBar from '../../container/NavBar/NavBar';

const layout=(props)=>(
    <Aux>
        <div><NavBar/></div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
    
);
export default layout;