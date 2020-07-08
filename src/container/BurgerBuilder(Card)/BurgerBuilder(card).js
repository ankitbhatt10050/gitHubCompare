import React, { Component } from 'react';
import Aux from '../../hoc/auxillary';
import Card from '../card/card';
import InputTag from '../InputTag/InputTag';


class BurgerBuilder extends Component{
    render()
    {
        return(
            <Aux>
                <div><InputTag/></div> 
                <div><Card/></div> 
                <div><Card/></div>
            </Aux>
        );
    }
}
export default BurgerBuilder;