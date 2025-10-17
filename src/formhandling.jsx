import { Component } from "react";

class Formhandling extends Component{
constructor(){
    super();
          this.state={
            email:"",
            comments:"",
            topic:""
          };
        //   this.Changee=this.Changee.bind(this);
}
Changee=(event)=>{
    this.setState({
        email:event.target.value
    });
    console.log(event.target.value)
}
handletxt = event =>{
    this.setState({
        comments:event.target.value
    })
    console.log(event.target.value)

}
selecttxt = event =>{
    this.setState({
        topic:event.target.value
    })
    console.log(event.target.value)

}
handlesubmit = event =>{
    alert(`${this.state.email} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
}
    render(){
    return(
        <form onSubmit={this.handlesubmit}>
            <label>Email </label>
<input type="text" value={this.state.email} placeholder="Enter your name" onChange={this.Changee} /><br />
<label>Comments</label>
<textarea value={this.state.comments} onChange={this.handletxt}></textarea><br />
<select topic={this.state.topic} onChange={this.selecttxt}>
    <option>React</option>
    <option>Angular</option>
    <option>css</option>

</select><br />
<button type="submit">submit</button>
        </form>
    )
}
}
export default Formhandling