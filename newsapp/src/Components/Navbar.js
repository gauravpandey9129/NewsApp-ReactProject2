import React, { Component,  } from 'react'
import { Link,NavLink} from 'react-router-dom'



export default class Navbar extends Component {
  
  
  render() {
    return (
      <div >
        <div className="collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
          <div className="bg-dark p-4">
         <h5 className=" h4 text-warning ">  WELCOME ! </h5>
          <span className="text-body-secondary"> We grabed  todays top news for uhhhh.</span>
          </div>
          </div>
             <nav className="navbar navbar-dark bg-dark">
             <div className="container-fluid">
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
              </button>
        </div>
        <ul className=" nav justify-content-center position-absolute top-50 start-50 translate-middle  ">

          <li  className="nav-item">
          <NavLink  to="/"  className={({isActive})=>
             `nav-link text-light ${isActive ? "bg-danger rounded-4":"bg-dark"}`
            } >Home</NavLink>          </li>
          <li className="nav-item">
          <NavLink  to="/about"  className={({isActive})=>
             `nav-link text-light ${isActive ? "bg-danger rounded-4":"bg-dark"}`
            } >About Us</NavLink>
          </li>
          <li className="nav-item">
          <NavLink  to="/suggestion"  className={({isActive})=>
             `nav-link text-light ${isActive ? "bg-danger rounded-4":"bg-dark"}`
            } >Suggestion ? </NavLink>
          </li>
          <li className="nav-item">
          
          </li>
          </ul>
          <button type="button" className=" text-dark  position-absolute top-50 end-0 translate-middle-y btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Login
        </button>


        <div className=" bg-dark modal fade text-dark" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Login</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <form >
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
              <div class="modal-footer">
               
              </div>
            </div>
          </div>
        </div>
 
        </nav>
        

      

      </div>
    )
  }
}
