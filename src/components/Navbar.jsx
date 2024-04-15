import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <div class="container-fluid nav_bg">
          <div class="row">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-md">
                <Link to="/home" class="navbar-brand" >
                  <p id='logotext'>OnlineCodeEditor</p>
                </Link>
                <ul className= "nav-menu">
          <li>
            <Link to="/home" smooth>Home</Link>
          </li>
          <li>
            <Link to="/landing" smooth>Code Editor</Link>
          </li>
          <li>
            <Link to="/notes" smooth>Notes</Link>
          </li>
          <li>
            <Link to="/contact" smooth>Contact Us</Link>
          </li>
        </ul>
              </div>
            </nav>
          </div>
     </div>
    </>
  )
}

export default Navbar


