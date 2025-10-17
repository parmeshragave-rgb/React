import { Component } from "react";

class Compmount2 extends Component{
    constructor(){
        super()
        this.state={
            name:"hi"
        }
        console.log("constructor B")
    }

    static getDerivedStateFromProps(props,state){
        
        console.log("getDertivedFromProps B")
        return null
    }

    componentDidMount(){
        console.log("ComponentDidMount B")
    }

     shouldComponentUpdate(){
        console.log("shouldComponentUpdate B")
return true
    }
    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate B")
return null
    }
    componentDidUpdate(){
        console.log("getSnapshotBeforeUpdate B")
    }

render(){
    return(<>
    <div> lifecycle A{console.log("render B")}</div>
    </>)
}
}
export default Compmount2