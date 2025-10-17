import Regularcomp from "./regularcomp"
import Purecomp from "./purecomp"
import { Component } from "react"

class Parentcomp extends Component{
    constructor(){
        super()
        this.state={
            name:"leo"
        }
    }

componentDidMount(){
    setInterval(() => {
        this.setState({
            name:"leo"
        })
    }, 2000);
}
    
    
    
    render(){
            console.log("*********parent render***********")

        return(
            <>
            <Purecomp print={this.state.name}/>
            <Regularcomp print={this.state.name}/>
            </>
        )
    }
}
export default Parentcomp