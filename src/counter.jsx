import { Component } from "react";

class Counter extends Component{
    
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
        this.setState((prevState)=> ({
             count:prevState.count+1
        }))
    }
     Increment5(){
         this.increment()
         this.increment()
         this.increment()
         this.increment()
         this.increment()
          
     }
    
    render(){
        return(
            <>
            <h1>Counter</h1>
            <h3>{this.state.count}</h3>
            <button onClick={this.Increment5.bind(this)}>Count</button>
            </>
        )
    }
}

export default Counter