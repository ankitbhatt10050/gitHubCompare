import React, { Component } from 'react';
import Card from '../card/card';
// eslint-disable-next-line
import axios from 'axios';
import {connect} from 'react-redux';
import {initPost} from '../actions/action';
import InputTag from '../InputTag/InputTag';




class home extends Component{
    // state={
    //     posts:[]
    // }

    // componentDidMount()
    // {
    //     axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
    //         this.setState({posts:res.data.slice(0,10)})
    //         
    //     })
    // }

    // componentDidMount()
    // {
    //     console.log(this.props)
    // }

    // componentDidMount()
    // {
    //     this.props.onInit();
    //     console.log('function fire')
    // }

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

// const mapDispatchToProp=dispatch=>{
//     return{
//         onInit:()=>dispatch(initPost())
//     }
// }



export default connect(mapStateToProps)(home);