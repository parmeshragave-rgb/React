import { Component } from "react"

class Procs extends Component{
render(props){

    return(
        <>
        <form>
            <table>
                <tbody>
                <tr>
                    <td>{this.props.row}</td>
                    <td><input type="text" placeholder={this.props.holder} /></td>
                </tr>
                </tbody>
            </table>
        </form>
        </>
    )
}
}
export default Procs