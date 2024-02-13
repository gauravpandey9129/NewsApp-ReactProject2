import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import { BrowserRouter,Route,Routes } from 'react-router-dom'


export default class App extends Component {
  render() {
    return (
      <div  >
        
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path='/' element={<News/>}></Route>
       </Routes>
       
       </BrowserRouter>
      </div>
    )
  }
}
