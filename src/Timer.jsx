import React,{useState,useEffect} from "react";
function Timer(){
    const[count,setcount]=useState(0)


useEffect(()=>{
    const intervel=setInterval(() => {
        setcount(prev => prev+1)
    },1000)
return () =>{
    clearInterval(intervel)
}
},[])
    return(
        <>
        <h1>{count}</h1>
        </>
    )
}
export default Timer