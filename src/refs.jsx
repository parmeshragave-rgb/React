import React ,{ Component } from "react";

class Refs extends Component{
    constructor(){
        super()
        this.inputref=React.createRef()
        this.passref=React.createRef()
    }
    componentDidMount(){
        this.inputref.current.focus()
        
    }
    
     Handler=() =>{
      alert(`${this.passref.current.value} is valid`)
      preventDefault()
    }
    render(){
        return(
            <>
            <label>Username: </label>
            <input type="text" ref={this.inputref}/>
            <label>Password: </label>
            <input type="password" ref={this.passref} />
            <button onClick={this.Handler}>Submit</button>
            </>
        )
    }
}
export default Refs