import { Component } from "react";
import Child from "./childComponent";
class Parent extends Component{
    constructor(){
        super()
         this.state={
            ParentName:"Parent"
         }
        this.greetprnt=this.greetprnt.bind(this)
    }

    greetprnt(childmsg){
        alert(`Hello ${this.state.ParentName} from ${childmsg}`)
    }

    render(){
        return(
            <>      
        <Child handler={this.greetprnt} />
            </>
        )
    }
}
export default Parent