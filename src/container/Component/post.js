import React, { Component } from 'react';
// eslint-disable-next-line
import axios from 'axios';
import {connect} from 'react-redux';
import Aux from '../../hoc/auxillary';
import {delete_post} from '../actions/action';
import classes from './post.css';

class Post extends Component{

    handleClick=()=>
    {
        this.props.deletePost(parseInt(this.props.post.id) )
        this.props.history.push('/')
    }

    render(){

        const post=this.props.post?(
             
                <Aux >
                  <h4>
                        {this.props.post.name}
                    </h4>
                
                <p>
                    {this.props.post.bio}
                </p>
                <p>
                    <h6>Follower</h6>
                    {this.props.post.followers}
                </p>

                <p>
                    <h6>Following</h6>
                    {this.props.post.following}
                </p>

                
                <p>
                    <h6>Repos</h6>
                    {this.props.post.public_repos}
                </p>

                
                <p>
                    <h6>Location</h6>
                    {this.props.post.location}
                </p>

                
                <p>
                    <h6>Email</h6>
                    {this.props.post.email}
                </p>
                <div>
                  <button style={{ width:"80px", height:"20px"}} onClick={this.handleClick}>Delete</button>
                </div> 
                </Aux>
                
               
        ):
        (<div style={{textAlign:"center"}}>Loading Post...</div>)

        return(
            <div className={classes.post}>
                <p>
                    {post}
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps)=>{
    let id=ownProps.match.params.post_id;
    
    // let x=state.posts.find(post=>parseInt(post.id)===parseInt(id))
    // console.log(x)
    return {
        // post:state.posts.find(post=>parseInt(post.id)===parseInt(id))
        post:state.posts.find(post=>parseInt(post.id)===parseInt(id))
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        deletePost:(id)=>{dispatch(delete_post(id))}
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Post);