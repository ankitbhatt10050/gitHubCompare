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

    starRating=(repo,follower)=>
    {
        if(repo<10 || follower<20)
        {
            return 1;
        }
        else if((repo>=10 && repo<20) || (follower>=20 && follower<30))
        {
            return 2;
        }
        else if((repo>=20 && repo<40) || (follower>=30 && follower<50))
        {
            return 3;
        }
        else if(repo>=40 || follower>50 )
        {
            return 4
        }
        else{
            return 0;
        }
    }


    render()
    {
        let checked
        let follower=this.props.post.followers
        let repo=this.props.post.public_repos
        checked=1+this.starRating(repo,follower)
        console.log(checked)
        
        return(
            <div >
                
                <div className={classes.card}>
                <Link to={'/'+this.props.id}> <img src={this.props.post.avatar_url} alt={giticon}/></Link>
                    <div className={classes.container}>
                        <h4><b>{this.props.post.title}</b></h4>
                        <p>{this.props.post.bio}</p>
                        <div><Star checked={checked}/></div>

                    </div>
                </div>
                
            </div>
        );

    }
}

const mapStateToProps = (state,ownProps)=>{
    let id=ownProps.id
    return {
        post:state.posts.find(post=>parseInt(post.id)===parseInt(id))
        
    }
}
export default connect(mapStateToProps)(Card);