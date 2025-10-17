import { Component } from "react";

class Condrend extends Component{
    
    state={
        isloggedin:true
    }
    
    
    
    
    render(){

         
        
        
        
        
        
        //Method3
//        let message
//        if(this.state.isloggedin){
//         message=<h1>Welcome BAck</h1>
//        }
//        else{
//         message=<h1>Login to proceed</h1>

//        }
// return(message)

        //Method2
        // return this.state.isloggedin ?
        // (<h1>Welcome Back!!!</h1>) :
        // (<h1>Login</h1>)

        //Method1
        // if(this.state.isloggedin){
        //     return(<h1>Welcome Back!!!</h1>)
        // }
        // else{
        //     return(<h1>Login</h1>)

        // }
    }
}
export default Condrend