// import { useState } from 'react'
// import './App.css'
// import { StateExample } from './UseState/StateExample'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//    <StateExample/>
//     </>
//   )
// }

// export default App


// import React,{useRef} from "react"

// function App(){

//  const inputRef = useRef()

//  const focusInput = ()=>{
//   inputRef.current.focus()
//  }

//  return(
//   <div>

//    <input ref={inputRef} />

//    <button onClick={focusInput}>
//     Focus Input
//    </button>

//   </div>
//  )
// }

// import React,{useMemo,useState} from "react"

// function App(){

//  const [number,setNumber] = useState(0)

//  const doubleNumber = useMemo(()=>{
//    return slowFunction(number)
//  },[number])

//  return(
//   <div>
//    <input 
//     type="number"
//     value={number}
//     onChange={(e)=>setNumber(e.target.value)}
//    />
//    <p>{doubleNumber}</p>  
//   </div>
//  )
// }

// function slowFunction(num){
//  console.log("Calculating...")
//  for(let i=0;i<10;i++){}
//  return num*2
// }

import React,{useReducer} from "react"

function reducer(state,action){

 switch(action.type){

  case "increment":
   return {count:state.count+1}

  case "decrement":
   return {count:state.count-1}

  default:
   return state
 }
}

function App(){

 const [state,dispatch] = useReducer(reducer,{count:0})

 return(
  <div>

   <h1>{state.count}</h1>

   <button onClick={()=>dispatch({type:"increment"})}>
    +
   </button>

   <button onClick={()=>dispatch({type:"decrement"})}>
    -
   </button>

  </div>
 )
}

export default App