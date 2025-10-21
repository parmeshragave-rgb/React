import React,{useState} from "react";
function Usestateobj(){
    const[name,setname]=useState({firstname:'',lastname:''})
    return(
        <>
        <form>
        <input type="text" value={name.firstname} onChange={(e) => setname( {...name,firstname:e.target.value})}/>
        <input type="text" value={name.lastname} onChange={(e) => setname({...name,lastname:e.target.value})}/>
        <h1>{name.firstname}</h1>
        <h1>{name.lastname}</h1>
        </form>
        </>
    )
}
export default Usestateobj