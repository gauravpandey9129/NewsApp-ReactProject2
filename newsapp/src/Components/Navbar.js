import React, { Component } from 'react'
import { Link,NavLink} from 'react-router-dom'



export default class Navbar extends Component {
  render() {
    return (
      <div >
       <ul className=" nav justify-content-center  bg-dark-subtle">
       <li className="nav-item">
         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Contact Us</Link>
        </li>
        <li className="nav-item">
       
        </li>
</ul>
      </div>
    )
  }
}
