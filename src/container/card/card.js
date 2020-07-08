import React, { Component } from 'react';
import classes from './card.css';
import giticon from '../../giticon.png'
import Star from '../Star/Star';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


class Card extends Component{

    state={
        id:[]
        
    }

    componentDidMount()
    {
        this.state.id.push(this.props.id)
       
    }

    render()
    {
        
        
        return(
            <div >
                
                <div className={classes.card}>
                <Link to={'/'+this.props.id}> <img src={this.props.post.avatar_url} alt={giticon}/></Link>
                    <div className={classes.container}>
                        <h4><b>{this.props.title}</b></h4>
                        <p>{this.props.body}</p>
                        <div><Star/></div>

                    </div>
                </div>
                
            </div>
        );

    }
}

const mapStateToProps = (state,ownProps)=>{
    let id=ownProps.id
   
    // let x=state.posts.find(post=>parseInt(post.id)===parseInt(id))
    // console.log(x)
    return {
        post:state.posts.find(post=>parseInt(post.id)===parseInt(id))
        
    }
}


export default connect(mapStateToProps)(Card);
// export default Card;