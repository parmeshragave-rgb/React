import React,{useState,useEffect,useRef} from "react";
function Userefhook(){
const inputref=useRef(null)
useEffect(()=>{
    inputref.current.focus()
})

    return(
        <>
        <input type="text" ref={inputref}/>
        </>
    )
}
export default Userefhook