import { Component } from "react";

class StateCls extends Component{
    constructor(){
        super()
            this.state={
                message: "Welcome"
            }
            // this.changeMessage=this.changeMessage.bind(this)
        
    }

    changeMessage= ()=>{
        this.setState ({
            message:"Thank You"
        });
    }
    render(){
        return(
            <>
            <h1 className="Ste">{this.state.message}</h1>
             {/* <button className="Steb" onClick={this.changeMessage.bind(this)}>Greet</button>  */}
            {/* <button className="Steb" onClick={this.changeMessage}>Greet</button> */}
            <button className="Steb" onClick={this.changeMessage}>Greet</button> 
            </>
        )
    }
}

export default StateCls