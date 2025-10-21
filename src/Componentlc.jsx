import React,{ Component } from "react";

class Componentlc extends Component{
    constructor(){
        super()
        this.state={
            count:0,

        }
    }
    componentDidMount(){
        this.intervel=setInterval(() => {
            this.setState({
                count:this.state.count+1
            })
            
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.intervel)
    }

render(){
    return(
        <>
<h1>{this.state.count}</h1>
        </>
    )
}






































    //     componentDidMount(){
        
//         document.title=`clicked ${this.state.count} times`
//     }
//     componentDidUpdate(prevprops,prevstate){
//         if(prevstate.count!=this.state.count)
//         console.log("updated")
//         document.title=`clicked ${this.state.count} times`
//     }
// handler= () =>{

//  this.setState({
//         count:this.state.count +1
// })
// }
   
//     render(){
//         return(
//             <>
//             <input type="text" value={this.state.name} onChange={ e => this.setState({name:e.target.value})}/>
//             <button onClick={this.handler}>Count {this.state.count}</button>
//             </>
//         )
//     }
}
export default Componentlc