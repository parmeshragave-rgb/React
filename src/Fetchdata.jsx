import React,{useState,useEffect} from "react";
import axios from "axios";
function Fetchdata(){
    const[post,setpost]=useState({})
    const[id,setid]=useState(1)
    const[buttonclick,changbtn]=useState(1)

    const submithandler = () => {
           changbtn(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
            console.log(res)
            setpost(res.data)
        })
        .catch((err) => {
            console.log(err)
 })
    },[buttonclick])

return(
<>
<input type="text"  onChange={(e) => setid(e.target.value)}/>
<button onClick={submithandler}>fetch title</button>
<h1>{post.title}</h1>
</>
    )
}

export default Fetchdata