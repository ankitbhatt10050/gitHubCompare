import React, { Component } from 'react';
// eslint-disable-next-line
import axios from 'axios';
import {connect} from 'react-redux';
import Aux from '../../hoc/auxillary';
import {delete_post} from '../actions/action';
import bk from '../../GitHub-bk.png';

class Post extends Component{
    // state={
    //     post:null
    // }
    // componentDidMount()
    // {
    //     let id=this.props.match.params.post_id
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id).then(res=>{
    //         this.setState({post:res.data})
    //     })
        
    // }

    componentDidMount()
    {
        // console.log('current State',this.props.post.id)
    }

    handleClick=()=>
    {
        this.props.deletePost(parseInt(this.props.post.id) )
        this.props.history.push('/')
    }

    render(){

        const post=this.props.post?(
             
                <Aux >
                    <h4 style={{textAlign:"center"}}>
                        {this.props.post.name}
                    </h4>
                <p style={{textAlign:"center"}}>
                    {this.props.post.bio}
                </p>
                <div style={{textAlign:"center"}}>
                  <button style={{ width:"80px", height:"20px"}} onClick={this.handleClick}>Delete</button>
                </div>  
                </Aux>
                
               
        ):
        (<div style={{textAlign:"center"}}>Loading Post...</div>)

        return(
            <div style={{backgroundColor:'#E7E7E7'}}>
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