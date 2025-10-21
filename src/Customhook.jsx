import React,{useState,useEffect} from "react";
import UseDocumentTitle from "./hooks/useDocumenttitle";
function Customhook(){
    const[count,setcount]=useState(0)
 UseDocumentTitle(count)
    return(
        <>
        <button onClick={() => setcount(prev => prev+1)}>count {count}</button>
        </>
    )
}
export default Customhook