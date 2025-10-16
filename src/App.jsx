import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar'
import Course from './course'
import New from './new'
import Wojsx from './wojsx'
import Procs from './propsinclass'
// import StateCls from './Stecls'
import Counter from './counter'
 class App extends Component{
  render(){
    return(
      <>
      {/* < Navbar />
      < Course />
      {/* < StateCls/> */}
      {/* < Counter />  */}
      <New name="Jhon">Founder</New>
      <New name="Ben">Co-Founder</New>
      <New name="Starc">Public Relations Officer</New>
      <New name="Peter">Manager</New>

      {/* <Procs holder="Enter your name" row="Name"></Procs>
      <Procs holder="Enter your Email" row="Email"></Procs>
      <Procs holder="Address" row="Addrs"></Procs>
      < Wojsx/> */}
      </>
    )
  }
 }
export default App;
 


