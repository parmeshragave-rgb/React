import { Component } from "react";

class ClassTimer extends Component{

    constructor(){
        super()
        this.state={
            timer:0
        }
    }
    
    componentDidMount(){
        this.interval=setInterval(()=>{
           this.setState({
            timer:this.state.timer+1
           })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    
    
    render(){
        return(
            <>
             <center><h1>{this.state.timer}</h1>
             <button onClick={()=> clearInterval(this.interval)}>Stop timer</button></center>
            </>
        )
    }
}
export default ClassTimer