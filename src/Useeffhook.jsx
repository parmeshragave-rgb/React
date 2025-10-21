
import React,{useState,useEffect} from "react";
function Useeffhook(){
const[count,setcount]=useState(0)


useEffect(() => {
    document.title=`clicked ${count} times`
})

return(
    <>
    <button onClick={() => setcount(prev => prev+1)}>count {count}</button>
    </>
)
}
export default Useeffhook