import React,{useState,useEffect} from "react";
import Useeffcdm from "./Useeffcdm";
function Mousecontainer(){
const[display,setdisplay]=useState(true)


return(
    <>
    <button onClick={() => setdisplay(!display)}>hide</button>
    {display===true && <Useeffcdm/>}
    </>
)
}
export default Mousecontainer