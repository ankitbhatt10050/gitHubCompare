import React from 'react';
import * as classes from  './Star.css';
const Star=(props)=>{
   let star=[]
   let Darkstar=[]
   let checkedstar=3
   let uncheckedstar=2

   
   
   for(let i=0;i<checkedstar;i++)
   {
       star.push(<span className="fa fa-star checked" key={i} ></span>)
   }
   for(let i=0;i<uncheckedstar;i++)
   {
       Darkstar.push(<span className="fa fa-star checked" key={i}></span>)
   }



    return(
        <div>
               <div >
                    <span className={classes.checked}>
                    {star}
                    </span>
                    {Darkstar}
                </div>  
        </div>
    );
}

export default Star;