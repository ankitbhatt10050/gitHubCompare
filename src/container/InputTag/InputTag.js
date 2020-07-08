import React, { Component } from 'react';
import  classes from './InputTag.css'
import {connect } from 'react-redux';
import {initPost, delete_post} from '../actions/action';
// import { addSkills, removeSkills } from '../actions/action'; 


class InputTag extends Component{

    
    
    constructor(props){
        super(props)

        this.state={
            skills:[],
        }
        this.inputRef=React.createRef();
    }


    addSkill=(e)=>{
        const skills=this.state.skills
        const value=e.target.value
        if(e.key==='Enter'&&value)
        {
            if(skills.find(skill=>skill.toLowerCase()===value.toLowerCase()))
            {
                return alert('Duplicate Search')

            }
            skills.push(value)
            this.setState({skills:skills})
            let index=this.state.skills.length-1
            this.props.onInit(this.state.skills[index])
            

            this.inputRef.current.value=null
        }
        else if(e.key==="Backspace"&&!value)
        {
            this.removeSkill(skills.length-1)
        }
    }


    removeSkill=(i)=>{
        
        const skills=this.state.skills
        skills.splice(i,1)
        this.setState({skills:skills})
        
    }


    render(){

        const{skills}=this.state;
        
        

        return(
            <div>
                <h2>Search!!</h2>
                <div className={classes.skill}>
                    <ul>
                        {skills.map((skill,i)=>{
                            return(
                            <li key={i}>{skill}<button onClick={()=>this.removeSkill(i)}>+</button></li>
                            )
                        })}
                        
                        <li >
                            <input style={{background:"none",flexGrow:"1",backgroundColor:"white"}} onKeyDown={this.addSkill}type="text" size="4" ref={this.inputRef}/>
                        </li>
                    </ul>
                </div>

            </div>
        );

    }
}

const mapStateToProps=(state)=>
{
    return{
        posts:state.posts
    }
}

const mapDispatchToProp=dispatch=>{
    return{
        onInit:(uname)=>dispatch(initPost(uname)),
        rm:(id)=>dispatch(delete_post(id))
    }
}



export default connect(mapStateToProps,mapDispatchToProp)(InputTag);