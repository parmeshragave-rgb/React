// const New = (props) =>{
//     return(
//         <>
//         {console.log(props)}
//       <h3>MR.{props.name}</h3>
//       {props.children}
//         </>
//     )
// }
// export default New

import { Component } from "react";

//Destructuring props
// const New =({name})=>{
// return(
//   <>
//   <h1>Mr.{name}</h1>
//   </>
// )
// }

// const New=props =>{
//   const {name}=props
//   return(
//     <h1>Mr.{name}</h1>
//   )
// }

//destructuring in class component
class New extends Component{
  render(){
    const {name} =this.props
    return(
      <h1>Mr.{name}</h1>
    )
  }
}
export default New