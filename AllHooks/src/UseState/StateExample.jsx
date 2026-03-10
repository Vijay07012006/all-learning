import { useState } from "react";


export const StateExample = ()=>{
    const [count , setCount]= useState(0);
  
    const increaseCount = ()=>{
        setCount((prev) => prev+1)
        console.log(count);  
    };
    return (
        <div>
            <p>count : {count}</p>
            <button onClick={increaseCount}>Increase counter</button>
        </div>
    )
};