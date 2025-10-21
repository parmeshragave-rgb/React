import React,{useState,useEffect} from "react";
function Useeffcdm(){
const[x,setX]=useState(0)
const[y,setY]=useState(0)


useEffect( () => {
    console.log("useeff called")
   window.addEventListener("mousemove",mousehandler) 
   return () =>{
   window.removeEventListener("mousemove",mousehandler) 

   }
},[])


const mousehandler =(e) => {
  console.log("mousemove occured")
    setX(e.clientX)
    setY(e.clientY)

}

return(
    <>
    <center>
        X-{x}
        Y-{y}
    </center>
    </>
)
}
export default Useeffcdm