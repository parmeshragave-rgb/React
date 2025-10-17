import { Component } from "react";
import Compmount2 from "./compmound2";

class Compmount extends Component{
    constructor(){
        super()
        this.state={
            name:"hi"
        }
        console.log("constructor A")
    }

    static getDerivedStateFromProps(props,state){
        
        console.log("getDertivedFromProps A")
        return null
    }

    componentDidMount(){
        console.log("ComponentDidMount A")
    }

    shouldComponentUpdate(){ // used to control the defaul updation of state when rendered
        console.log("shouldComponentUpdate A")
return true

    }
    getSnapshotBeforeUpdate(){   //called right before the changes from the virtual dom are to reflected in the actual dom
        console.log("getSnapshotBeforeUpdate A")
         return null
    }
    componentDidUpdate(){ // called aftr render is finished
        console.log("getSnapshotBeforeUpdate A")

    }
    chagestate = event =>{
        this.setState({
            name:"hello"
        })
    }
render(){
    return(<>
    <div> lifecycle A{console.log("render A")}</div>
    <button onClick={this.chagestate}>Change State</button>
    <Compmount2 />
    </>)
}
}
export default Compmount

//constructor is the first method to be called in a class component
       //--this.state can be directly modified in constructor
       //--state is initilized
       //--binding of event handelers happens in constructor(good practice as per react doc)
       //--super has to be called inorder to use  props


//getDerivedStateFromProps is static method (this keyword doesnt work),it has two arguments viz, state and props..it is used when the state depens on props over time...like intilizing

//render is a method inside which jsx is written,it is always required

//ComponentDidMount() is  method that is executed at the end,invokes immeditly after the components are mounted in the dom

//ComponentWillUnmount is a meth0d called when a component is destroyed are removed compleatly  things like removal of event handeler occur