import { Component } from "react";

//event binding
class Evntbinding extends Component{
    state={
        message:"Not clicked"
    }
    clickedbtn(){
    this.setState({
        message: "Clicked"
    })
    }

    render(){
        return(
            <>
            <h3>{this.state.message}</h3>
            <button onClick={this.clickedbtn.bind(this)}>click here</button>
            </>
        )
    }
}
export default Evntbinding