import { DELETE_POST, SET_POST, INIT_POST, ADD_SKILLS,REMOVE_SKILLS } from "../container/actions/action"

const initState={
    posts:[
        
    ],
    
}


const reducer=(state=initState,action)=>{
    switch(action.type)
    {
        case DELETE_POST:
            console.log('id of the post',action.id)
            let newPost=state.posts.filter(post=>{
                return action.id!==post.id
            })
    
            return {
                ...state,
                posts:newPost
            }

        case SET_POST:
            let newArr=[]
            let id = action.data.data.id;
            console.log('H', state.posts, action.data.data)
            let flag = true
            state.posts.forEach(i =>{
                if(i.id === id){
                    flag = false
                }
            })
            if(flag){
                newArr.push(action.data.data)
                console.log('new array',newArr)
            }
           
            return{
                ...state,
                posts:state.posts.concat(newArr)
            }

            case ADD_SKILLS:
                let newA=state.skills
                console.log(newA)

            console.log(action.skill)
            return state;

            case REMOVE_SKILLS:
            let x=[]
            x=state.skills.splice(action.index,1)            
            return{
                ...state,
                skills:x
                
            }

        default:
            return state

    }

 
}

export default reducer;