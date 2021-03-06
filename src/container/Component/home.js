import React, { Component } from 'react';
import Card from '../card/card';
import axios from 'axios';
import {connect} from 'react-redux';
import {initPost} from '../actions/action';
import InputTag from '../InputTag/InputTag';




class home extends Component{

    render()
    {
        const{posts}=this.props;
        const postList=posts.length?(
                posts.map(post=>{
                    return(
                        <div key={post.id}>                            
                                <Card id={post.id} title={post.name} body={post.bio} />
                        </div>
                    )
                })
        ):(
        <div style={{textAlign: "center"}}></div>
        )


        return(
            
            <div>
                <InputTag/>
                {postList}
            </div>
        );
    }
    
}


const mapStateToProps=state=>{
    return {
        posts:state.posts
    }
}


export default connect(mapStateToProps)(home);