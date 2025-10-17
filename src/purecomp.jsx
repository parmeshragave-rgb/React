import { PureComponent } from "react";

class Purecomp extends PureComponent{
    render(){
        console.log("pure comp render")
        return(
            <>
            <p>pure comp {this.props.print}</p>

            </>
        )
    }
}
export default Purecomp