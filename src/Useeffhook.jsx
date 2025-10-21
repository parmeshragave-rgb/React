
import React,{useState,useEffect} from "react";
function Useeffhook(){
const[count,setcount]=useState(0)
const[name,setname]=useState('')

useEffect(() => {
    console.log("updated")
    document.title=`clicked ${count} times`
},[count])
 
return(
    <>
    <button onClick={() => setcount(prev => prev+1)}>count {count}</button>
    <input type="text" value={name} onChange={(e) => setname(e.target.value)}/>
    </>
)
}
export default Useeffhook