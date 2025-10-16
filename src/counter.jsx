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
         increment()
          increment()
           increment()
            increment()
             increment()
     }
    
    render(){
        return(
            <>
            <h1>Counter</h1>
            <h3>{this.state.count}</h3>
            <button onClick={() => Increment5()}>Count</button>
            </>
        )
    }
}

export default Counter