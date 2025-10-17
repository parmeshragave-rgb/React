import { Component } from "react"
class Regularcomp extends Component{
    render(){
        console.log("reg comp render")

        return(
            <>
            <p>regular comp {this.props.print}</p>
            </>
        )
    }
}
export default Regularcomp