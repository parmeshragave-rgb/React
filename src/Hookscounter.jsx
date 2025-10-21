import React,{useState} from "react";
function Hookscounter(){
const[count,setcount]=useState(0)
return(
    <>
    <button onClick={() => setcount((prevcount) => prevcount+1)}>count {count}</button>
    </>
) 
}
export default Hookscounter