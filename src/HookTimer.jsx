import React,{useState,useEffect,useRef} from "react";
function HookTimer(){
    const[timer,settimer]=useState(0)
    const timerref=useRef(null)
    useEffect(()=>{
      timerref.current=setInterval(()=>{
        settimer(prev => prev+1)
      },1000)
      return () => {
        clearInterval(timerref.current)
      }
    },[])

    return(
        <>
        <center><h2>{timer}</h2>
        <button onClick={() => clearInterval(timerref.current)}>stop timer</button>
        </center>
        </>
    )
}
export default HookTimer