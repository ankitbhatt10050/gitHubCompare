import axios from 'axios';


export const DELETE_POST='DELETE_POST';
export const SET_POST='SET_POST';
export const INIT_POST='INIT_POST';
export const ADD_SKILLS='ADD_SKILLS';
export const REMOVE_SKILLS='REMOVE_SKILLS';



export const delPo=(id)=>{
    return {
         type:DELETE_POST,
        id:id
    };
}
//asyn code for deleting
// export const delete_post=(id)=>{
//     return dispatch=>{
//         setTimeout(()=>{
//             dispatch(delPo(id))
//         },2000);
       
// }
// }

//we can get our previous state
//asyn code for deleting
// export const delete_post=(id)=>{
//     return (dispatch,prevState)=>{
//         setTimeout(()=>{
//             dispatch(delPo(id))
//         },2000);
       
// }
// }


export const delete_post=(id)=>{
     return {
        type:DELETE_POST,
       id:id
   };    
}

export const setPost=(data)=>{
    return{
        type:SET_POST,
        data:data
    };
};

export const initPost=(uname)=>{
    return dispatch=>{

        axios.get('https://api.github.com/users/'+uname)
        .then(res=>{
            dispatch(setPost(res));
        })

    };
};


export const addSkills=(skill)=>{
    return {
        type:ADD_SKILLS,
        skill:skill
    };
};

export const removeSkills=(index)=>{
    return {
        type:REMOVE_SKILLS,
       index:index
    };
};
